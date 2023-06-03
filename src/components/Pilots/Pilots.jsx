import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const NoImageContainer = styled.div`
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px; /* Adjust as needed, little Padawan */
`;

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
      <div className="pilot-visual-reference">
        {!imageError ? (
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${newIdentifier}.jpg`}
            alt="Pilot visual reference"
            onError={handleImageError}
          />
        ) : (
          <NoImageContainer>
            <p>No image available...</p>
          </NoImageContainer>
        )}
      </div>
      <ul className="pilot-further-details">
        <div className="pilot-details-classification">
          <li>
            <span>Height:</span> <span>{pilotDetails.height}</span>
          </li>
          <li>
            <span>Mass:</span> <span>{pilotDetails.mass}</span>
          </li>
          <li>
            <span>Gender:</span> <span>{pilotDetails.gender}</span>
          </li>
          <li>
            <span>Hair:</span> <span>{pilotDetails.hair}</span>
          </li>
          <li>
            <span>Birthday:</span> <span>{pilotDetails.birthday}</span>
          </li>
        </div>
      </ul>
    </div>
  );
};
