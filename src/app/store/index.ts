import {loadingReducer, LoadingState} from "./reducers/loading.reducer";
import {planetsReducer, PlanetsState} from "./reducers/planets.reducer";

export interface AppState {
  loadingState: LoadingState,
  planetsState: PlanetsState
}

export const mainReducer = {
  loadingState: loadingReducer,
  planetsState: planetsReducer
};
