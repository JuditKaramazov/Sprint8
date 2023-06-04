import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { Main } from './pages/Main/Main';
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
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          {isLoggedIn ? (
            <Route path="/starships/*" element={<Main />} />
          ) : (
            <Route path="/starships/*" element={<Navigate to="/" />} />
          )}
          {isLoggedIn && <Route path="/starships/:id/" element={<StarshipCard />} />}
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
