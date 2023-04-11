import {PlanetsState} from "../reducers/planets.reducer";
import {PlanetsModel} from "../../interfaces/planets.model";

const compose = <T>(...callback: Array<(arg: T) => T>) => (payload: T) => {
  return callback.reduceRight((prevResult, fn) => fn(prevResult), payload)
}

export const generateRandomPlanet = () => {
  const random = Math.floor(Math.random() * (19 - 3 + 1)) + 2;
  return `https://starwars-visualguide.com/assets/img/planets/${random}.jpg`;
}

export const populatePlanetsPhoto = (planetsList: PlanetsModel[]) => {
  if (!planetsList) {
    return [];
  }

  return planetsList.map((item: PlanetsModel) => {
    return structuredClone({
      ...item,
      imageUrl: generateRandomPlanet()
    });
  });
}

export const generatePlanetId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}


export const generateId = (planetsList: PlanetsModel[]): PlanetsModel[] => {
  if (!planetsList) {
    return [];
  }

  return planetsList.map((item: PlanetsModel) => {
    return structuredClone({
      ...item,
      id: generatePlanetId()
    });
  })
}


export const setPlanets = (
  state: PlanetsState,
  {planetsInfo}: Pick<PlanetsState, 'planetsInfo'>
) => {
  const payload = planetsInfo.results || [];
  return {
    ...state,
    planetsInfo: planetsInfo,
    allPlanets: compose(generateId, populatePlanetsPhoto)(payload)
  }
}

export const addMorePlanets = (
  state: PlanetsState,
  {planetsInfo}: Pick<PlanetsState, 'planetsInfo'>
) => {
  const payload = planetsInfo.results || [];
  return {
    ...state,
    planetsInfo: planetsInfo,
    allPlanets: [
      ...state.allPlanets,
      ...compose(generateId, populatePlanetsPhoto)(payload)
    ]
  };
}
