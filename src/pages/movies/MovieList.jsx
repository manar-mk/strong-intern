import { useEffect, useState } from "react";
import axios from "axios";
import { requests } from "../../requests";
import ContentList from "../../common/List/ContentList";
import search_icon from "../../assets/icons/search.svg";
import s from "../../common/styles/header.module.css";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get(requests.nowPlayingMovies).then((response) => {
      console.log(response.data.results);
      setMovieList(response.data.results);
    });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMovies = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ marginTop: "8rem" }}>
      <div
        style={{
          marginBottom: "2rem",
          background: "transparent",
          border: "1px solid white",
          borderRadius: "10px",
        }}
        className={s.input__container}
      >
        <input type="text" placeholder="SEARCH" onChange={handleSearch} />
        <img src={search_icon} alt="search icon" />
      </div>
      <ContentList movieList={filteredMovies} />
    </div>
  );
}
