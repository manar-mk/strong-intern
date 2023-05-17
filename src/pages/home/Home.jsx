import MainPoster from "./components/MainPoster";
import TrendMoviesRow from "./components/rows/TrendMoviesRow";
import RecMoviesRow from "./components/rows/RecMoviesRow";
import { requests } from "../../requests";

export default function Home() {
  return (
    <div style={{maxHeight: "100%"}}>
      <MainPoster/>
      <TrendMoviesRow title="Movies You Must Watch" url={requests.topRated} rowId="1" />
      <RecMoviesRow title="Recommended For You" url={requests.playingNowMovies} rowId="2"/>
    </div>
  );
}
