import styled from 'styled-components';
import starsBg from '../../assets/starsBg.png';

export const PilotsIntroduction = styled.h1`
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

export const PilotsContainer = styled.div`
    margin: 0 6rem;
	gap: 1.5rem;
    padding: 1rem;
    background-image: url(${starsBg});
    background-size: cover;
    -webkit-column-count: 4;
    -moz-column-count: 4;
    column-count: 4;
    animation: smoothStart 2s ease-in;

    .pilot-name {
        letter-spacing: 0.2rem;
        font-size: 1.6rem;
        font-weight: 600;
        text-transform: uppercase;
        -webkit-text-stroke: 0.5px black;
    }

    .pilot-further-details {
        width: 100%;
        font-size: 1.25rem;
        margin: 1 auto;
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
`;

export const PilotImageContainer = styled.div`
  display: column;
  
  .pilot-visual {
    max-height: 20rem;
    box-shadow: 0px 3px 2px gold;
    object-fit: fill;
}
`;

export const NoImageContainer = styled.div`
  height: 300px;
  width: 20%;
  align-items: center;
  justify-content: center;
  background-color: grey;
  opacity: 0.6;

  p {
    color: gold;
    font-size: 2rem;
    text-align: center;
  }
`;