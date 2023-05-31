import React from 'react';
import SiteHeader from './components/Header/Header'
import SiteFooter from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StarshipList } from './pages/Main/Main';
import { StarshipCard } from './components/StarshipCard/StarshipCard';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships/" element={<StarshipList />} />
        <Route path="/starships/:id/" element={<StarshipCard />} />
        {/* <Route path="/starships/:id/" element={<Home />} /> */}
      </ Routes>
      <SiteFooter />
    </ BrowserRouter>
    </>
  );
};

export default App;
