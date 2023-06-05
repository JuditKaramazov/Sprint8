import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ShipsBox = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  color: white;
  align-text: left;
  font-family: "Stars", sans-serif;
  justify-content: center;
  cursor: pointer;
  background-color: #151515;
  border-radius: 0.2rem;
  padding: 5px;
  
  ul {
    list-style: none;
    text-transform: uppercase;
  };

  li {
    padding: 0.2rem 5rem;
    border-style: solid;
    border-width: 0 0 0 0.1rem;

    &:hover {
      color: gold;
      font-weight: 500;
    }
  };

  .primary-model {
    text-transform: none;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.3rem;
  text-decoration: none;
`;
