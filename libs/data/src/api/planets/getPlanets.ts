import client from '../client';
import endpoints from '../endpoints';
import { createAPIError } from '../utils';
import { GetPlanetsResponseDTO } from './dto.types';

export default async (page: number = 1): Promise<GetPlanetsResponseDTO> => {
  const endpoint = endpoints.planets;
  try {
    const response = await client.get(endpoint, {
      params: {
        page,
      },
    });
    return response.data;
  } catch (e) {
    throw createAPIError(e);
  }
};
