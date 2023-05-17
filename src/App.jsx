import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./common/ScrollToTop";
const Home = lazy(() => import("./pages/home/Home"));
const MovieDetails = lazy(() => import("./pages/movie-details/MovieDetails"));
const TvDetails = lazy(() => import("./pages/tv-details/TvDetails"));
const TvShowList = lazy(() => import("./pages/tv-show/TvShowList"));
const MovieList = lazy(() => import("./pages/movies/MovieList"));

import Header from "./common/Header";
import Loader from "./common/Loader";
import "./App.css";
import Statistics from "./pages/statistics/Statistics";

function App() {
  return (
    <ScrollToTop>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <Suspense fallback={<Loader />}>
              <MovieDetails />
            </Suspense>
          }
        />
        <Route
          path="/tv/:id"
          element={
            <Suspense fallback={<Loader />}>
              <TvDetails />
            </Suspense>
          }
        />
        <Route
          path="/movie/similarMovie/:id"
          element={
            <Suspense fallback={<Loader />}>
              <MovieDetails />
            </Suspense>
          }
        />
        <Route
          path="/tvserials"
          element={
            <Suspense fallback={<Loader />}>
              <TvShowList />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<Loader />}>
              <MovieList />
            </Suspense>
          }
        />
        <Route
          path="/statistics"
          element={
            <Suspense fallback={<Loader />}>
              <Statistics />
            </Suspense>
          }
        />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
