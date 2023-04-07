import {createAction, props} from "@ngrx/store";
import {PlanetsRequestPayload} from "../../interfaces/planets.model";

export enum PlanetsAction {
  loadPlanets = '[Planets Page] Get Planets',
  loadPlanetsSuccess = '[Planet Page] Get Planets Success',
  loadPlanetsFailure = '[Planet Page] Get Planets Failure'
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
