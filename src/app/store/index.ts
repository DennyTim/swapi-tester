import {loadingReducer, LoadingState} from "./reducers/loading.reducer";
import {planetsReducer, PlanetsState} from "./reducers/planets.reducer";
import {PlanetsEffect} from "./effects/planets.effect";

export interface AppState {
  loadingState: LoadingState,
  planetsState: PlanetsState
}

export const mainReducer = {
  loadingState: loadingReducer,
  planetsState: planetsReducer
};

export const effectList = [
  PlanetsEffect
];
