import styled from 'styled-components';
import starsBg from '../../assets/starsBg.png';

export const ShipsContainer = styled.div`
	display: flex;
	flex-direction: column;
    margin: 3rem auto;
    margin-bottom: 1rem;
    align-items: center;
	justify-content: center;
	gap: 1.5rem;
    background-image: url(${starsBg});
    background-size: cover;
    animation: smoothStart 2s ease-in;

    .ship-name {
        letter-spacing: 0.2rem;
        font-size: 3rem;
        font-weight: 600;
        text-transform: uppercase;
        -webkit-text-stroke: 0.5px black;
    }

    .starships-details {
        width: 100%;
        font-size: 1.25rem;
        margin: 0 auto;
        max-width: 1500px;
    }

    ul {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
    }

    li {
        justify-content: space-between;
        list-style: none;

        span {
            color: grey;
            margin-left: 0.7rem;
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
`;

export const ImageContainer = styled.div`
	position: relative;
    box-shadow: 0px 3px 2px gold;
    .starship-visual {
        max-height: 25rem;
		width: 100%;
        object-fit: fill;
    };
`