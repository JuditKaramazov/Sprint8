import styled from 'styled-components';
import starsBg from '../../assets/starsBg.png';

export const FilmsIntroduction = styled.h1`
    margin: 3rem;
    letter-spacing: 0.2rem;
    font-size: 2.5rem;
    font-weight: 600;
    gap: 2rem;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    -webkit-text-stroke: 0.5px black;
`;

export const FilmContainer = styled.div`
    margin: 0 2rem 0 14rem;
    align-items: center;
    gap: 2rem;
    background-image: url(${starsBg});
    background-size: cover;
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-gap: 1.5rem;
    -moz-column-gap: 1.5rem;
    column-gap: 1.5rem;
    animation: smoothStart 2s ease-in;

    .film-title,
    .film-episode {
        justify-content: center;
        letter-spacing: 0.2rem;
        font-size: 1.6rem;
        font-weight: 600;
        text-transform: uppercase;
        -webkit-text-stroke: 0.5px black;
    }

    .film-further-details {
        width: 100%;
        font-size: 1.25rem;
        margin: 1rem -2rem 4rem;
        max-width: 1500px;
    }

    ul {
        font-weight: 1rem;
    }

    li {
        justify-content: space-between;
        list-style: none;
        text-transform: uppercase;

        span {
            color: #DEDEDE;
            margin-left: 0.7rem;
            text-transform: capitalize;
        }
    }
    
    @keyframes smoothStart {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        margin: 0 4rem 0 26rem;
        align-items: center;
      }

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        margin: 0 4rem 0 14rem;
        align-items: center;
      }
      
      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        margin: 0 4rem 0 8rem;
        align-items: center;
      }
    }
`;

export const FilmImageContainer = styled.div`
  display: flex;
  
  .film-visual {
    max-height: 20rem;
    box-shadow: 0px 3px 2px gold;
  }
`;

export const NoImageContainer = styled.div`
  width: 40%;
  height: 315px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  box-shadow: 0px 3px 2px gold;
  opacity: 0.6;

  p {
    color: gold;
    font-size: 2rem;
    text-align: center;
  }
`;
