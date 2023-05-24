import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);

  const SlideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const SlideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-l p-4">My shows</h2>
      <div className=" flex relative items-center group">
        <MdChevronLeft
          onClick={SlideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden  group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full relative overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {movies?.map((item, id) => (
            <div
              key={id}
              className="w-32 md:w-32 lg:w-48  text-ellipsis inline-block cursor-pointer relative p-2 "
            >
              <img
                className="w-full h-auto "
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <p className="text-white text-ellipsis overflow-hidden ...">
                {item?.title}
              </p>
              <p className="text-white">{item?.release_date.substr(0, 4)}</p>
              <div className="flex items-center  ">
                <img
                  className="w-[28px] h-[14px]"
                  src="/assets/imdb.svg"
                  alt="imdb"
                />
                <p className=" text-white  px-2 ">{item?.vote_average}</p>
                <img src="/assets/eye.svg" alt="eye" />
                <p
                  onClick={() => deleteShow(item.id)}
                  className="absolute text-gray-100 top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
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

export default SavedShows;
