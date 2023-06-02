import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'; 
import SiteHeader from './components/Header/Header';
import SiteFooter from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { StarshipList } from './pages/Main/Main';
import { StarshipCard } from './components/StarshipCard/StarshipCard';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/starships/"
            element={<PrivateRoute component={StarshipList} />}
          />
          <Route path="/starships/:id/" element={<StarshipCard />} />
        </Routes>
        <SiteFooter />
      </>
    </BrowserRouter>
  );
};

export default App;
