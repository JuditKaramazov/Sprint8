import React from 'react';
import { HeaderContainer, Header, Logo, HeaderLinks, LinksContainer } from './Header.styled';
import siteLogo from '../../assets/siteLogo.svg';

export default function SiteHeader() {
  return (
    <HeaderContainer>
      <Header>
        <Logo>
          <a href="/">
            <img
              className="header-logo"
              src={siteLogo}
              alt="Star Wars official logo"
            />
          </a>
        </Logo>
        <LinksContainer>
          <HeaderLinks to="/" className="nav-link">
            HOME
          </HeaderLinks>
          <HeaderLinks to="/starships/" className="nav-link">
            STARSHIPS
          </HeaderLinks>
        </LinksContainer>
        {/* Según la página patita, aquí iría un search form. */}
      </Header>
    </HeaderContainer>
  );
}

