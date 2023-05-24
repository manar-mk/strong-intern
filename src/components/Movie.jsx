import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const MovieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(MovieID, {
        savedShows: arrayUnion({
          id: item?.id,
          title: item?.title,
          img: item?.poster_path,
          release_date: item?.release_date,
          vote_average: item?.vote_average,
        }),
      });
    } else {
      alert("Please Login to save");
    }
  };

  return (
    // sm:w-[200px] md:w-[240px] lg:w-[280px]
    <div className="w-32 md:w-32 lg:w-48  text-ellipsis inline-block cursor-pointer relative p-2 ">
      <img
        className="w-full h-auto "
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt={item?.title}
      />
      <p className="text-white text-ellipsis overflow-hidden ...">
        {item?.title}
      </p>
      <p className="text-white">{item?.release_date.substr(0, 4)}</p>
      <div className="flex items-center justify-between">
        <img className="w-[28px] h-[14px]" src="/assets/imdb.svg" alt="imdb" />
        <p className=" text-white  px-2 ">{item?.vote_average}</p>
        <img src="/assets/eye.svg" alt="eye" />
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
