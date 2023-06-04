import React from 'react';
import { Registration, RegistrationLinks, StyledLink, HeaderLinks, LinksContainer } from './../Header/Header.styled';

const Navbar = ({
  loggedInUser,
  loginCompleted,
  openLoginModal,
  openSignupModal,
  handleLogOut,
  navigateToStarships,
  setShowStarshipsAlert,
}) => {

  const handleStarshipsClick = () => {
    if (loggedInUser) {
      navigateToStarships();
    } else {
      setShowStarshipsAlert(true);
    }
  };

  return (
    <LinksContainer>
      {!loggedInUser && (
        <Registration>
          <RegistrationLinks className="signup" onClick={openSignupModal}>
            SIGN UP
          </RegistrationLinks>
          <div className="divider" style={{ color: 'grey', height: '1.2rem' }}> || </div>
          <RegistrationLinks className="login" onClick={openLoginModal}>
            LOG IN
          </ RegistrationLinks>
        </ Registration>
      )}
      {loginCompleted ? (
        <Registration>
          <StyledLink to="/starships/" className="user">
            {loggedInUser.name}
          </ StyledLink>
          <div className="divider" style={{ color: 'grey', height: '1.2rem' }}> || </div>
          <RegistrationLinks className="user" onClick={handleLogOut}>
            SIGN OUT
          </ RegistrationLinks>
        </ Registration>
      ) : (
        <Registration>
          <RegistrationLinks className="signup" onClick={openSignupModal}>
            SIGN UP
          </ RegistrationLinks>
          <div className="divider" style={{ color: 'grey', height: '1.2rem' }}> || </div>
          <RegistrationLinks className="login" onClick={openLoginModal}>
            LOG IN
          </ RegistrationLinks>
        </ Registration>
      )}
      <HeaderLinks to="/" className="nav-link">
        HOME
      </ HeaderLinks>
      {loggedInUser ? (
        <HeaderLinks to="/starships/" className="nav-link" onClick={handleStarshipsClick}>
          STARSHIPS
        </ HeaderLinks>
      ) : (
        <HeaderLinks to="/starships/" className="nav-link" onClick={handleStarshipsClick}>
          STARSHIPS
        </ HeaderLinks>
      )}
      <HeaderLinks to="/about" className="nav-link">
        ABOUT
      </ HeaderLinks>
    </ LinksContainer>
  );
};

export default Navbar;
