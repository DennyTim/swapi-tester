import {createAction, props} from "@ngrx/store";
import {PlanetsModel, PlanetsRequestPayload} from "../../interfaces/planets.model";

export enum PlanetsAction {
  loadPlanets = '[Planets Page] Get Planets',
  loadPlanetsSuccess = '[Planet Page] Get Planets Success',
  loadPlanetsFailure = '[Planet Page] Get Planets Failure',
  loadMorePlanets = '[Planet Page] Get More Planets',
  loadMorePlanetsSuccess = '[Planet Page] Get More Planets Success',
  loadMorePlanetsFailure = '[Planet Page] Get More Planets Failure',
  loadPlanetById = '[Planet Detail Page] Get Planet by Id',
  loadPlanetByIdSuccess = '[Planet Detail Page] Get Planet by Id Success',
  loadPlanetByIdFailure = '[Planet Detail Page] Get Planet by Id Failure'
}

export const loadPlanets = createAction(PlanetsAction.loadPlanets);

export const loadPlanetsSuccess = createAction(
  PlanetsAction.loadPlanetsSuccess,
  props<{ planetsInfo: PlanetsRequestPayload }>()
);

export const loadPlanetsFailure = createAction(
  PlanetsAction.loadPlanetsFailure,
  props<{ error: unknown }>()
)

export const loadMorePlanets = createAction(
  PlanetsAction.loadMorePlanets
)

export const loadMorePlanetsSuccess = createAction(
  PlanetsAction.loadMorePlanetsSuccess,
  props<{ planetsInfo: PlanetsRequestPayload }>()
)

export const loadMorePlanetsFailure = createAction(
  PlanetsAction.loadMorePlanetsFailure,
  props<{ error: unknown }>()
)

export const loadPlanetById = createAction(
  PlanetsAction.loadPlanetById,
  props<{ id: string }>()
)

export const loadPlanetByIdSuccess = createAction(
  PlanetsAction.loadPlanetByIdSuccess,
  props<{ selectedPlanet: PlanetsModel }>()
)

export const loadPlanetByIdFailure = createAction(
  PlanetsAction.loadPlanetByIdFailure,
  props<{ error: unknown }>()
)
