import { QueryClient, QueryClientProvider } from 'react-query';
import Main from './pages/main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children: [
      {
        path: 'movie/:movieId',
        Component: Main,
      },
    ],
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
