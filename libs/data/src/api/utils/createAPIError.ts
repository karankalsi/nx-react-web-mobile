import { APIError } from '../types';

export default (e: any): APIError => {
  console.log(e);
  const endpoint = e?.config?.url || '';
  const apiError: APIError = {
    message: `API Error: ${endpoint}`,
    endpoint: endpoint,
    status: e?.response?.status || 0,
  };
  return apiError;
};
