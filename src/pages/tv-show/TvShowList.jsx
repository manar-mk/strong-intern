import { useEffect, useState } from "react";
import axios from "axios";
import { requests } from "../../requests";
import ContentList from "../../common/List/ContentList";
import search_icon from "../../assets/icons/search.svg";
import s from "../../common/styles/header.module.css";

export default function TvShowList() {
  const [tvShows, setTvShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get(requests.popularTvShows).then((response) => {
      console.log(response.data.results);
      setTvShows(response.data.results);
    });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTv = tvShows.filter((show) =>
    show.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ marginTop: "8rem" }}>
      <div style={{ marginBottom: "2rem" }} className={s.input__container}>
        <input type="text" placeholder="SEARCH" onChange={handleSearch} />
        <img src={search_icon} alt="search icon" />
      </div>
      <ContentList tvShows={filteredTv} />
    </div>
  );
}
