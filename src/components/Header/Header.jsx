import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, StyledHeader, Logo } from './Header.styled';
import siteLogo from '../../assets/siteLogo.svg';
import Navbar from '../Navbar/Navbar';
import { Login } from '../../features/authentication/Login/Login';
import { SignUp } from '../../features/authentication/SignUp/SignUp';

export default function Header() {
  const [openedLogin, setOpenedLogin] = useState(false);
  const [openedSignup, setOpenedSignup] = useState(false);
  const [openedRegistration, setOpenedRegistration] = useState(false);
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
    setOpenedRegistration(false);
  };

  const closeLoginModal = () => {
    setOpenedLogin(false);
  };

  const openSignupModal = () => {
    setOpenedSignup(true);
    setOpenedLogin(false);
    setOpenedRegistration(false);
  };

  const closeSignupModal = () => {
    setOpenedSignup(false);
  };

  const openRegistrationModal = () => {
    setOpenedRegistration(true);
    setOpenedLogin(false);
    setOpenedSignup(false);
  };
  
  const closeRegistrationModal = () => {
    setOpenedRegistration(false);
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
        <Navbar
          loggedInUser={loggedInUser}
          loginCompleted={loginCompleted}
          openLoginModal={openLoginModal}
          openSignupModal={openSignupModal}
          openRegistrationModal={openRegistrationModal}
          handleLogOut={handleLogOut}
          navigateToStarships={navigateToStarships}
          setShowStarshipsAlert={setShowStarshipsAlert}
        />
        {showStarshipsAlert && !loggedInUser && (
          <div style={{ color: 'red', fontSize: '1.2rem' }}>
            Only registered users can see this content.
          </div>
        )}
      </ StyledHeader>
      {openedLogin && (
        <Login
          closeModal={closeLoginModal}
          handleLogIn={handleLogIn}
          openRegistrationModal={openRegistrationModal}
        />
      )}
      {openedSignup && (
        <SignUp
          closeModal={closeSignupModal}
          handleLogIn={handleLogIn}
          openLoginModal={openLoginModal}
        />
      )}
      {openedRegistration && (
        <SignUp
          closeModal={closeRegistrationModal}
          handleLogIn={handleLogIn}
          openLoginModal={openLoginModal}
        />
      )}
    </ HeaderContainer>
  );
}
