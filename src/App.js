import React from 'react';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import './assets/css/component.scss';

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import PokemonList from "./components/pokemon/PokemonList";
import PokemonProfile from "./components/pokemon/PokemonProfile";


function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/pokemon" />} />
          <Route exact path="/pokemon/:pokeIndex" element={<PokemonProfile />} />
          <Route exact path="/pokemon" element={<PokemonList />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
