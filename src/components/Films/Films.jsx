import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FilmImageContainer, NoImageContainer } from './Films.styled';

export const Films = (props) => {
  const [filmDetails, setFilmDetails] = useState([]);

  const fetchFilmDetails = (url) => {
    axios
      .get(url)
      .then((res) => {
        const { title, episode_id, director, producer, release_date } = res.data;
        const film = {
          title,
          episode: episode_id,
          director,
          producer,
          release_date,
        };
        setFilmDetails((prevDetails) => [...prevDetails, film]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    props.url.forEach((url) => {
      fetchFilmDetails(url);
    });
  }, [props.url]);

  return (
    <div className="films-container">
      {filmDetails.map((film, index) => (
        <div className="film-details" key={index}>
          <p className="film-title">{film.title}</p>
          <p className="film-episode">Episode: {film.episode}</p>
          <FilmImageContainer>
            {film.imageError ? (
              <NoImageContainer>
                <p>No image available!</p>
              </ NoImageContainer>
            ) : (
              <img className="film-visual"
                src={`https://starwars-visualguide.com/assets/img/films/${index + 1}.jpg`}
                alt="Film visual reference"
                onError={(e) => {
                  const updatedFilmDetails = [...filmDetails];
                  updatedFilmDetails[index].imageError = true;
                  setFilmDetails(updatedFilmDetails);
                }}
              />
            )}
          </ FilmImageContainer>
          <ul className="film-further-details">
            <div className="film-details-classification">
              <li>Director:<span>{film.director}</span></li>
              <li>Producer:<span>{film.producer}</span></li>
              <li>Release Date:<span>{film.release_date}</span>
              </li>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};
