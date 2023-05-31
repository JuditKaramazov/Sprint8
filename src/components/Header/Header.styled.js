import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  margin-bottom: 1rem;
  top: 0;
  background-color: transparent;
  background-size: cover;
  backdrop-filter: blur(10px);
  border-bottom: 0.5px solid white;
  z-index: 20;
  animation: smoothStart 2s ease-in;

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

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: 140px; 
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
`;

export const Logo = styled.div`
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 9rem;
  margin-bottom: 1rem;
`;

export const HeaderLinks = styled(NavLink)`
  display: inline-block;
  min-height: 44px;
  color: grey;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  padding: 0 28px;

  &:hover {
    color: white;
  }

  &:focus {
    color: white;
    border-bottom: 4px groove white !important;
  }
`;

