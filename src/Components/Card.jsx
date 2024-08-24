import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Card1 from "./Card1";
const api_key = "api_key=9b702a6b89b0278738dab62417267c49";
const main_url = "https://api.themoviedb.org/3";
const api_url = main_url + "/discover/movie?sort_by=popularity.desc&" + api_key;
const img_url = "https://image.tmdb.org/t/p/w500";
const searchUrl = main_url + "/search/movie?" + api_key;
function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api_url);
      const json = await response.json();
      setData(json.results);
    }
    fetchData();
    console.log();
  }, []);
  return (
    <div className="home">
      {data.map((movie) => (
        <div key={movie.id} className="cont">
          <div className="box">
            <img 
              src={img_url + movie.poster_path}
              alt={movie.title}
              className="my-img"
              onClick={() => {
                window.location.href = "./Components.Card?id=" + Card1.id
              }}
            />
            <h2 className="title">{movie.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;