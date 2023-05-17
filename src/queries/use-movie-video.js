import { useQuery } from 'react-query';
import { config } from '../config';

export const useVideoMovies = (id) => {
  return useQuery({
    queryKey: ['movies-video'],
    queryFn: async () => {
      const resp = await fetch(
        `${config.baseURL}movie/${id}/videos?api_key=${config.API_KEY}`
      );

      const data = await resp.json();
      return data;
    },
  });
};
