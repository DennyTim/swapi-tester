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
  // TODO: implement it after planets page
  // residents: PersonsModel[];
  films: string;
  created: string;
  edited: string;
  url: string;
  imageUrl: string;
}
