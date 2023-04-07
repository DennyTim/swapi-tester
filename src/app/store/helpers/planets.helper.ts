import {PlanetsState} from "../reducers/planets.reducer";

export const setPlanets = (
  state: PlanetsState,
  {planetsInfo}: Pick<PlanetsState, 'planetsInfo'>
) => {
  return {
    ...state,
    planetsInfo: planetsInfo,
    // TODO: Implement fn composition
    allPlanets: []
  }
}
