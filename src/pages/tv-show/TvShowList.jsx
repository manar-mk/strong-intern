import { useEffect, useState } from "react";
import axios from "axios";
import { requests } from "../../requests";
import ContentList from "../../common/List/ContentList";
import search_icon from "../../../public/search.svg";
import s from "../../common/styles/header.module.css";

const PAGE_SIZE = 13;

export default function TvShowList() {
  const [tvShows, setTvShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
    .get(`${requests.popularTvShows}&page=${currentPage}`)
    .then((response) => {
      console.log(response.data.results);
      setTvShows((prevMovieList) => [
        ...prevMovieList,
        ...response.data.results,
      ]);
    });
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const visibleMovies = tvShows.slice(0, endIndex);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTv = visibleMovies.filter((show) =>
    show.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ marginTop: "8rem" }}>
      <div style={{ marginBottom: "2rem" }} className={s.input__container}>
        <input type="text" placeholder="SEARCH" onChange={handleSearch} />
        <img src={search_icon} alt="search icon" />
      </div>
      <ContentList tvShows={filteredTv} />
      <div style={{textAlign: "center", marginTop: "2rem"}}>
        <button
          onClick={handleLoadMore}
          style={{
            background: "white",
            fontSize: "16px",
            textDecoration: "uppercase",
            padding: "1rem 2rem",
            backgroundColor: "#5C469C",
            color: "white",
            border: "transparent",
            borderRadius: "10px",
            fontFamily: "'Montserrat', sans-serif"
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
