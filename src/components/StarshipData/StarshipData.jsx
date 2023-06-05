import React from 'react';
import { ShipsBox, StyledLink } from './StarShipData.styled';


export const StarshipData = (props) => {
    let data = props.url;
    let alternative = data.replace("https://swapi.dev/api/starships/", " ").replace("/", "");
    const newIdentifier = parseInt(alternative);

    return (
        <div className='data-wrapper'>
            <StyledLink to={"/starships/" + newIdentifier}>
                <ShipsBox>
                    <ul>
                        <li className="primary-name">{props.name}</li>
                        <li className="primary-model">{props.model}</li>
                    </ul>
                </ ShipsBox>
            </ StyledLink>
        </div>
    );
};
