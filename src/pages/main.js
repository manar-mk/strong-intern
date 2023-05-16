import React from 'react';
import Layout from '../components/layout';
import MainScreen from '../components/MainScreen/MainScreen';
import MovieList from '../components/MovieList/MovieList';

const Main = () => {
  return (
    <Layout>
      <MainScreen />
      <MovieList />
    </Layout>
  );
};

export default Main;
