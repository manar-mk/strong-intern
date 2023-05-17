import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Main from './pages/main';
import MovieDetails from './pages/MovieDetails';
import SearchPage from './pages/Search';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
  },
  {
    path: '/movie/:movieId',
    Component: MovieDetails,
  },
  {
    path: '/search',
    Component: SearchPage,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
