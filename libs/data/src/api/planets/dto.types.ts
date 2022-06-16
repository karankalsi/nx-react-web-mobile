export interface PlanetDTO {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export type GetPlanetResponseDTO = PlanetDTO;

export interface GetPlanetsResponseDTO {
  count: number;
  next: string | null;
  previous: string | null;
  results: PlanetDTO[];
}
