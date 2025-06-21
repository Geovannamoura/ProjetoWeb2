// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topo from './components/topo';
import Rodape from './components/rodape';
import Inicio from './components/Inicio';
import Home from './components/home';
import Sobre from './components/Sobre';

function App() {
  return (
    <Router>
      <Topo />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Rodape />
    </Router>
  );
}

export default App;
