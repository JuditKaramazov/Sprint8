import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, StyledHeader, Logo, Registration, RegistrationLinks, StyledLink, HeaderLinks, LinksContainer } from './Header.styled';
import siteLogo from '../../assets/siteLogo.svg';
import { Login } from '../Login/Login';
import { SignUp } from '../SignUp/SignUp';

export default function Header() {
  const [openedLogin, setOpenedLogin] = useState(false);
  const [openedSignup, setOpenedSignup] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginCompleted, setLoginCompleted] = useState(false);
  const [showStarshipsAlert, setShowStarshipsAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userFromStorage = localStorage.getItem('loggedInUser');
    if (userFromStorage) {
      setLoggedInUser(JSON.parse(userFromStorage));
      setLoginCompleted(true);
    }
  }, []);

  useEffect(() => {
    let timeoutId;

    if (showStarshipsAlert) {
      timeoutId = setTimeout(() => {
        setShowStarshipsAlert(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showStarshipsAlert]);

  const openLoginModal = () => {
    setOpenedLogin(true);
    setOpenedSignup(false);
  };

  const closeLoginModal = () => {
    setOpenedLogin(false);
  };

  const openSignupModal = () => {
    setOpenedSignup(true);
    setOpenedLogin(false);
  };

  const closeSignupModal = () => {
    setOpenedSignup(false);
  };

  const handleLogIn = (user) => {
    setLoggedInUser(user);
    setOpenedLogin(false);
    setLoginCompleted(true);
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  };

  const handleLogOut = () => {
    setLoggedInUser(null);
    setLoginCompleted(false);
    localStorage.removeItem('loggedInUser');
    window.location.reload();
  };

  const navigateToStarships = () => {
    if (loggedInUser) {
      navigate('/starships/');
    }
  };

  return (
    <HeaderContainer>
      <StyledHeader>
        <Logo>
          <a href="/">
            <img className="header-logo" src={siteLogo} alt="Star Wars official logo" />
          </a>
        </ Logo>
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
            <HeaderLinks to="/starships/" className="nav-link">
              STARSHIPS
            </ HeaderLinks>
          ) : (
            <HeaderLinks
              to="/starships/"
              className="nav-link"
              onClick={() => setShowStarshipsAlert(true)}
            >
              STARSHIPS
            </ HeaderLinks>
            
          )}
          <HeaderLinks to="/about" className="nav-link">
            ABOUT
          </HeaderLinks>
        </ LinksContainer>
        {showStarshipsAlert && !loggedInUser && (
          <div style={{ color: 'red', fontSize: '1.2rem'}}>
            Only registered users can see this content.
          </div>
        )}
      </ StyledHeader>
      {openedLogin && <Login closeModal={closeLoginModal} handleLogIn={handleLogIn} />}
      {openedSignup && <SignUp closeModal={closeSignupModal} handleLogIn={handleLogIn} />}
    </ HeaderContainer>
  );
}
