import {AppState} from "../index";
import {createSelector} from "@ngrx/store";
import {PlanetsState} from "../reducers/planets.reducer";
import {PlanetsModel, PlanetsRequestPayload} from "../../interfaces/planets.model";

export const selectPlanetsState = (state: AppState): PlanetsState => state.planetsState;

export const selectPlanetsList = createSelector(
  selectPlanetsState,
  (state: PlanetsState): Partial<PlanetsRequestPayload> => state.planetsInfo
)

export const selectAllPlanets = createSelector(
  selectPlanetsState,
  (state: PlanetsState): Partial<PlanetsModel[]> => state.allPlanets
)

export const getSelectedPlanet = createSelector(
  selectPlanetsState,
  (state: PlanetsState): Partial<PlanetsModel> => state.selectedPlanet
)

export const getPlanetNextUrl = createSelector(
  selectPlanetsList,
  (planetsInfo: Partial<PlanetsRequestPayload>): string => planetsInfo?.next ?? "",
)
