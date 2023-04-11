import {Injectable} from "@angular/core";
import {AppState} from "../index";
import {select, Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PlanetsService} from "../../services/planets.service";
import {
  loadMorePlanets,
  loadMorePlanetsFailure,
  loadMorePlanetsSuccess,
  loadPlanets,
  loadPlanetsSuccess
} from "../actions/planets.action";
import {catchError, EMPTY, exhaustMap, iif, map, of, withLatestFrom} from "rxjs";
import {PlanetsRequestPayload} from "../../interfaces/planets.model";
import {getPlanetNextUrl} from "../selectors/planets.selector";

@Injectable()
export class PlanetsEffect {

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private planetsService: PlanetsService
  ) {
  }

  loadPlanetsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadPlanets),
    exhaustMap(() => {
      return this.planetsService.getPlanets().pipe(
        catchError((error: Error) => EMPTY),
        map((planetsInfo: PlanetsRequestPayload) => {
          return loadPlanetsSuccess({planetsInfo})
        })
      )
    })
  ));

  loadMorePlanetsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadMorePlanets),
    withLatestFrom(this.store.pipe(select(getPlanetNextUrl))),
    exhaustMap(([_, url]) => {
      const nextUrl = url || '';
      return iif(
        () => !!nextUrl,
        this.planetsService.getPlanetsByUrl(nextUrl).pipe(
          catchError(() => EMPTY),
          map((planetsInfo: PlanetsRequestPayload) => {
            return loadMorePlanetsSuccess({planetsInfo})
          })
        ),
        of(loadMorePlanetsFailure({error: new Error(`Next url isn't exist`)}))
      );
    })
  ));
}
