import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const SlideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const SlideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-l p-4">{title}</h2>
      <div className=" flex relative items-center group">
        <MdChevronLeft
          onClick={SlideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden  group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full relative overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={SlideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  hidden group-hover:block "
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
