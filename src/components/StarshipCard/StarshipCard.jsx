import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ShipsContainer, ImageContainer } from './StarshipCard.styled';
import { Pilots } from '../Pilots/Pilots';
import { PilotsIntroduction, PilotsContainer } from '../Pilots/Pilots.styled';
import { Films } from '../Films/Films';
import { FilmsIntroduction, FilmContainer } from '../Films/Films.styled';

export const StarshipCard = () => {
  const [starshipDetails, setStarshipDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/`)
      .then((res) => {
        const starships = res.data.results;
        const starship = starships.find((ship) => {
          const alternative = ship.url
            .replace("https://swapi.dev/api/starships/", "")
            .replace("/", "");
          const newIdentifier = parseInt(alternative);
          return newIdentifier === parseInt(id);
        });
        if (starship) {
          setStarshipDetails(starship);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
    
    return (
      <>
      <ShipsContainer>
        <h1 className="ship-name">{starshipDetails.name}</h1>
        <ImageContainer>
        <img className="starship-visual"
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} 
        alt="Starship visual representation" 
        onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = `https://lh3.googleusercontent.com/pw/AJFCJaUmn8kBRrJflDNa9vMfiK4cjVhxoGGSLA9ngPpkkyP_DRHoTzioB9ls9m39Kw1R2rDhreRyfe848n_USjpI-ZOv34jiWRXRnxsJCtvm2AWyza8g-_u_9FePhlvDbQ2xIThS_M_x2SFpGTXDPM5XVFI=w798-h575-s-no?authuser=0"`;
        }}
        />
        </ImageContainer>
        <div className="starships-details">
            <ul>
                <li>MODEL: <span>{starshipDetails.model}</span></li>
                <li>STARSHIP CLASS: <span>{starshipDetails.starship_class}</span></li>
                <li>MANUFACTURER: <span>{starshipDetails.manufacturer}</span></li>
                <li>COST: <span>{starshipDetails.cost_in_credits} credits</span></li>
                <li>CREW: <span>{starshipDetails.crew}</span></li>
                <li>PASSENGERS CAPACITY: <span>{starshipDetails.passengers}</span></li>
                <li>CARGO CAPACITY: <span>{starshipDetails.cargo_capacity} KM/H</span></li>
                <li>CONSUMABLES: <span>{starshipDetails.consumables}</span></li>
                <li>LENGTH: <span>{starshipDetails.length}M</span></li>
                <li>MAXIMUM ATMOSPHERING SPEED: <span>{starshipDetails.max_atmosphering_speed} KM/H</span></li>
                <li>HYPERDRIVE RATING: <span>{starshipDetails.hyperdrive_rating}</span></li>
                <li>MAXIMUM SPEED IN REAL SPACE<span>{starshipDetails.MGLT} MGLT</span></li>
            </ul>
        </div>
        </ ShipsContainer>
        <PilotsIntroduction>Related Pilots</ PilotsIntroduction>
        {starshipDetails.pilots && <PilotsContainer>
          <div>
            {starshipDetails.pilots.length > 0 ?
            starshipDetails.pilots.map(item =>
              <Pilots url={item} />
              ) : <h2>No pilots related to this specific starship!</h2>}
          </div>
          </ PilotsContainer>}
          <FilmsIntroduction>Multimedia Franchise</ FilmsIntroduction>
          {starshipDetails.films && <FilmContainer>
            <Films url={starshipDetails.films} />
          </ FilmContainer>}
      </>
  );
};
