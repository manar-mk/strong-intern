import { useQuery } from 'react-query';
import { config } from '../config';

export const useDetails = (id) => {
  return useQuery({
    queryKey: ['movies-popular'],
    queryFn: async () => {
      const resp = await fetch(
        `${config.baseURL}movie/${id}?api_key=${config.API_KEY}`
      );
	  const data = await resp.json();
      return data;
    },
  });
};
