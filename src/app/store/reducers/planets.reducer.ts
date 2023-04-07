import {PlanetsModel, PlanetsRequestPayload} from "../../interfaces/planets.model";
import {Action, createReducer, on} from "@ngrx/store";
import {loadPlanetsSuccess} from "../actions/planets.action";
import {setPlanets} from "../helpers/planets.helper";

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

const reducer = createReducer(
  initialState,
  on(loadPlanetsSuccess, setPlanets)
);

export function planetsReducer(state: PlanetsState | undefined, action: Action): PlanetsState {
  return reducer(state, action);
}
