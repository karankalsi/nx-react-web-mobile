export interface Planet {
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

export interface UsePlanetsActionExtraData {
  count: number;
  hasNext: boolean;
  loading: boolean;
}

export type UsePlanetsAction = [
  planets: Planet[],
  loadNext: () => void,
  extraData: UsePlanetsActionExtraData
];
