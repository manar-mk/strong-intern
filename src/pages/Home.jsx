import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row
        rowId="1"
        title="MOVIES YOU MUST WATCH"
        fetchURL={requests.requestTopRated}
      />
      <Row
        rowId="2"
        title="RECOMMENDED FOR YOU"
        fetchURL={requests.requestRecommendations}
      />
      <Row
        rowId="3"
        title="BOLLYWOOD CLASSICS"
        fetchURL={requests.requestBollywoodClassics}
      />
    </>
  );
};

export default Home;
