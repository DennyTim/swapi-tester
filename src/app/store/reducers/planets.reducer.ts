import {PlanetsModel, PlanetsRequestPayload} from "../../interfaces/planets.model";
import {Action, createReducer} from "@ngrx/store";

export interface PlanetsState {
  planetsInfo: Partial<PlanetsRequestPayload>;
  allPlanets: Partial<PlanetsModel[]>;
  selectedPlanet: Partial<PlanetsModel>;
}

const initialState: PlanetsState = {
  planetsInfo: {},
  allPlanets: [],
  selectedPlanet: {}
}

const reducer = createReducer(initialState);

export function planetsReducer(state: PlanetsState | undefined, action: Action): PlanetsState {
  return reducer(state, action);
}
