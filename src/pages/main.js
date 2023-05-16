import React from 'react';
import Layout from '../components/layout';
import MainScreen from '../components/MainScreen/MainScreen';
import MovieList from '../components/MovieList/MovieList';
import RecommendedList from '../components/RecommendationList/RecommendedList';

const Main = () => {
  return (
    <Layout>
      <MainScreen />
      <MovieList />
      <RecommendedList/>
    </Layout>
  );
};

export default Main;
