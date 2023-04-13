export interface PlanetsRequestPayload {
  count: number,
  next: string;
  previous: Partial<string>;
  results: PlanetsModel[];
}

export interface PlanetsModel {
  id: string;
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  citizens: PersonsModel[]
  films: string;
  created: string;
  edited: string;
  url: string;
  imageUrl: string;
}

export interface PersonsModel {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string[];
  edited: string;
  url: string;
}
