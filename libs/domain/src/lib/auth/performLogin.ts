import { authDataServices } from '@nx-react-web-mobile/data';

export default async (params: { user: string; password: string }) => {
  const token = await authDataServices.getToken(params);
  /**
   * TODO: Perform additional business logic here
   */
  return token;
};
