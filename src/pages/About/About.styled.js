import styled from 'styled-components';
import starsBg from '../../assets/starsBg.png';

export const BackgroundContainer = styled.div`
background-image: url(${starsBg});
`;

export const AboutWrapper = styled.div`
  height: 80vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  margin-top: 125px;
  color: white;
  align-text: left;
  font-family: "Stars", sans-serif;
  justify-content: center;
  background-color: black;
  border: 0.5px solid white;
  border-radius: 2rem;
  box-shadow: 10px 10px 23px -5px rgba(231,166,26,1);
  padding: 2px;

  .about-img {
    display: flex;
    justify-content: center;
  }
  
  .about-img img {
    max-width: 80%;
    height: 125px;
  }

  }
`;

export const AboutTextContainer = styled.div`
  margin: 3rem auto;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #26262650;
  border: 0.5px solid gold;
  border-radius: 2rem;
  padding: 2rem;

  p {
    font-family: "Stars", sans-serif;
    font-size: 1.2rem;
    font-weight: 100;
    text-align: center;
  }

  span {
    color: black;
    font-size: 2.5rem;
    letter-spacing: 1.5px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: gold;
  }
`;

export const StyledAboutBtn = styled.button`
    width: 40%;
    margin-bottom: 15px;
    align-items: center;
    color: black;
    background-color: #fade4b;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid white;
    padding: 0.7rem;
    cursor: pointer;

    &:hover {
        color: gold;
        background-color: #262626;
    }
}
`;
