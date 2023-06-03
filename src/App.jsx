import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SiteHeader from './components/Header/Header';
import SiteFooter from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { StarshipList } from './pages/Main/Main';
import { StarshipCard } from './components/StarshipCard/StarshipCard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <>
        <SiteHeader isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          {isLoggedIn ? (
            <Route path="/starships/*" element={<StarshipList />} />
          ) : (
            <Route path="/starships/*" element={<Navigate to="/" />} />
          )}
          {isLoggedIn && <Route path="/starships/:id/" element={<StarshipCard />} />}
        </Routes>
        <SiteFooter />
      </>
    </Router>
  );
};

export default App;
