import {Injectable} from "@angular/core";
import {AppState} from "../store";
import {Store} from "@ngrx/store";
import {loadMorePlanets, loadPlanets} from "../store/actions/planets.action";

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
}
