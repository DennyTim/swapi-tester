import {PlanetsModel, PlanetsRequestPayload} from "../../interfaces/planets.model";
import {Action, createReducer, on} from "@ngrx/store";
import {loadMorePlanetsSuccess, loadPlanetByIdSuccess, loadPlanetsSuccess} from "../actions/planets.action";
import {addMorePlanets, setPlanets, setSelectedPlanet} from "../helpers/planets.helper";

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
  on(loadPlanetsSuccess, setPlanets),
  on(loadMorePlanetsSuccess, addMorePlanets),
  on(loadPlanetByIdSuccess, setSelectedPlanet)
);

export function planetsReducer(state: PlanetsState | undefined, action: Action): PlanetsState {
  return reducer(state, action);
}
