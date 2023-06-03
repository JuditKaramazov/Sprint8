import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PilotImageContainer, NoImageContainer } from './Pilots.styled';

export const Pilots = (props) => {
  const [pilotDetails, setPilotDetails] = useState({});
  const [imageError, setImageError] = useState(false);

  const fetchPilotsDetails = () => {
    axios
      .get(props.url)
      .then((res) => {
        setPilotDetails({
          name: res.data.name,
          height: res.data.height,
          mass: res.data.mass,
          gender: res.data.gender,
          hair: res.data.hair_color,
          birthday: res.data.birth_year,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPilotsDetails();
    console.log(props.url);
  }, []);

  let alternative = props.url
    .replace('https://swapi.dev/api/people/', ' ')
    .replace('/', '');
  const newIdentifier = parseInt(alternative);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="pilots-container">
      <p className="pilot-name">{pilotDetails.name}</p>
      <PilotImageContainer>
        {!imageError ? (
          <img className="pilot-visual"
            src={`https://starwars-visualguide.com/assets/img/characters/${newIdentifier}.jpg`}
            alt="Pilot visual reference"
            onError={handleImageError}
          />
        ) : (
          <NoImageContainer>
            <p>No image available...</p>
          </NoImageContainer>
        )}
      </ PilotImageContainer>
      <ul className="pilot-further-details">
        <div className="pilot-details-classification">
          <li>Height:<span>{pilotDetails.height}</span></li>
          <li>Mass:<span>{pilotDetails.mass}</span></li>
          <li>Gender:<span>{pilotDetails.gender}</span></li>
          <li>Hair:<span>{pilotDetails.hair}</span></li>
          <li>Birthday:<span>{pilotDetails.birthday}</span></li>
        </div>
      </ul>
    </div>
  );
};
