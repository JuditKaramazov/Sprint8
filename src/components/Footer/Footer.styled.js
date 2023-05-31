import styled from 'styled-components';

export const FooterContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  text-align: center;
  padding-top: 3px;
  border-top: 0.5px solid white;
  animation: smoothStart 2s ease-in;

  a {
    text-decoration: none;
    font-size: 1.6rem;
    color: white;
    &:hover {
        color: gold;
    }
  }

  ul {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    list-style: none;
  }

  ul:nth-of-type(1) {
    gap: 3rem;
    margin-bottom: 1;

    li:nth-child(5) {
      padding-left: 1.8rem;
      border-left: 0.1rem solid white;
    }
  }

  ul:nth-of-type(2) {
    gap: 0.8rem;
    
    li {
      padding-right: 2rem;
      border-right: 0.1rem solid white;
    }

    li:last-child {
      border-right: none;
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