import React, { useEffect, useState } from 'react';
import { HeaderContainer, Header, Logo, Registration, RegistrationLinks, HeaderLinks, LinksContainer } from './Header.styled';
import siteLogo from '../../assets/siteLogo.svg';
import { Login } from '../Login/Login';
import { SignUp } from '../SignUp/SignUp';

export default function SiteHeader() {
  const [openedLogin, setOpenedLogin] = useState(false);
  const [openedSignup, setOpenedSignup] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginCompleted, setLoginCompleted] = useState(false);
  const [showStarshipsAlert, setShowStarshipsAlert] = useState(false);

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
  };
  

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
          {!loggedInUser && (
            <Registration>
              <RegistrationLinks className="signup" onClick={openSignupModal}>
                SIGN UP
              </RegistrationLinks>
              <div className="divider" style={{ color: 'grey', height: '1.2rem' }}> || </div>
              <RegistrationLinks className="login" onClick={openLoginModal}>
                LOG IN
              </RegistrationLinks>
            </Registration>
          )}
          {loginCompleted ? (
          <Registration>
            <RegistrationLinks className="user">
              {loggedInUser.name}
            </RegistrationLinks>
            <div className="divider" style={{ color: 'grey', height: '1.2rem' }}> || </div>
            <RegistrationLinks className="user" onClick={handleLogOut}>
              SIGN OUT
            </RegistrationLinks>
          </Registration>
        ) : (
          <Registration>
            <RegistrationLinks className="signup" onClick={openSignupModal}>
              SIGN UP
            </RegistrationLinks>
            <div className="divider" style={{ color: 'grey', height: '1.2rem' }}> || </div>
            <RegistrationLinks className="login" onClick={openLoginModal}>
              LOG IN
            </RegistrationLinks>
          </Registration>
        )}
          <HeaderLinks to="/" className="nav-link">
            HOME
          </HeaderLinks>
          {loggedInUser ? (
            <HeaderLinks to="/starships/" className="nav-link">
              STARSHIPS
            </HeaderLinks>
          ) : (
            <HeaderLinks
              to="/starships/"
              className="nav-link"
              onClick={() => setShowStarshipsAlert(true)}
            >
              STARSHIPS
            </HeaderLinks>
          )}
        </LinksContainer>
        {showStarshipsAlert && !loggedInUser && (
          <div style={{ color: 'red', fontSize: '1rem' }}>
            Only registered users can see this content.
          </div>
        )}
      </Header>
      {openedLogin && (
        <Login closeModal={closeLoginModal} handleLogIn={handleLogIn} />
      )}
      {openedSignup && (
        <SignUp closeModal={closeSignupModal} handleLogIn={handleLogIn} />
      )}
    </HeaderContainer>
  );
}