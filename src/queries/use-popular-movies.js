import { useQuery } from 'react-query';
import { config } from '../config';

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['movies-popular'],
    queryFn: async () => {
      const resp = await fetch(
        `${config.baseURL}movie/popular?include_adult=truе&api_key=${config.API_KEY}`
      );

      return resp.json();
    },
  });
};
