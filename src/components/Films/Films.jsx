import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const NoImageContainer = styled.div`
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px; /* Adjust the height as needed */
`;

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
          <div className="film-visual-reference">
            {film.imageError ? (
              <NoImageContainer>
                <p>No image available!</p>
              </ NoImageContainer>
            ) : (
              <img
                src={`https://starwars-visualguide.com/assets/img/films/${index + 1}.jpg`}
                alt="Film visual reference"
                onError={(e) => {
                  const updatedFilmDetails = [...filmDetails];
                  updatedFilmDetails[index].imageError = true;
                  setFilmDetails(updatedFilmDetails);
                }}
              />
            )}
          </div>
          <ul className="film-further-details">
            <div className="film-details-classification">
              <li>
                <span>Director:</span> <span>{film.director}</span>
              </li>
              <li>
                <span>Producer:</span> <span>{film.producer}</span>
              </li>
              <li>
                <span>Release Date:</span> <span>{film.release_date}</span>
              </li>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};
