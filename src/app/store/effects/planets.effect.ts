import {Injectable} from "@angular/core";
import {AppState} from "../index";
import {Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PlanetsService} from "../../services/planets.service";
import {loadPlanets, loadPlanetsSuccess} from "../actions/planets.action";
import {catchError, EMPTY, exhaustMap, map} from "rxjs";
import {PlanetsRequestPayload} from "../../interfaces/planets.model";

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

}
