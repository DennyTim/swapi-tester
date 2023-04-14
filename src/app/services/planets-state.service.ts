import {Injectable} from "@angular/core";
import {AppState} from "../store";
import {select, Store} from "@ngrx/store";
import {loadMorePlanets, loadPlanetById, loadPlanets} from "../store/actions/planets.action";
import {filter, Observable} from "rxjs";
import {PlanetsModel} from "../interfaces/planets.model";
import {getSelectedPlanet, selectAllPlanets} from "../store/selectors/planets.selector";

@Injectable({
  providedIn: 'root'
})
export class PlanetsStateService {

  constructor(private store: Store<AppState>) {
  }

  public loadPlanets(): void {
    this.store.dispatch(loadPlanets());
  }

  public loadMorePlanets(): void {
    this.store.dispatch(loadMorePlanets());
  }

  public loadPlanetById(id: string): void {
    this.store.dispatch(loadPlanetById({ id }));
  }

  public getSelectedPlanet(): Observable<Partial<PlanetsModel>> {
    return this.store.pipe(select(getSelectedPlanet))
  }

  public getAllPlanets(): Observable<Partial<PlanetsModel[]>> {
    return this.store.pipe(select(selectAllPlanets))
  }
}
