import client from '../client';
import endpoints from '../endpoints';
import { createAPIError } from '../utils';
import { GetPlanetResponseDTO } from './dto.types';

export default async (id: number | string): Promise<GetPlanetResponseDTO> => {
  const endpoint = endpoints.planet.replace(/{{id}}/g, String(id));
  try {
    const response = await client.get(endpoint);
    return response.data;
  } catch (e) {
    throw createAPIError(e);
  }
};
