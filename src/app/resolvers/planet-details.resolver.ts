import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {PlanetsModel} from "../interfaces/planets.model";
import {PlanetsStateService} from "../services/planets-state.service";
import {Actions, ofType} from "@ngrx/effects";
import {Observable, of, switchMap} from "rxjs";
import {PlanetsAction} from "../store/actions/planets.action";

@Injectable({
  providedIn: "root"
})
export class PlanetDetailsResolver implements Resolve<PlanetsModel | undefined> {
  constructor(
    private planetsStateService: PlanetsStateService,
    private actions$: Actions
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PlanetsModel | undefined> {
    return this.planetsStateService.getAllPlanets().pipe(
      switchMap((planets: Partial<PlanetsModel[]>) => {
        const planetsId: string = route.params['id'];
        if (planets?.length === 0) {
          this.planetsStateService.loadPlanetById(planetsId);
          return this.actions$.pipe(
            ofType(PlanetsAction.loadPlanetByIdSuccess)
          )
        } else {
          return of(planets[Number(planetsId)])
        }
      })
    )
  }
}
