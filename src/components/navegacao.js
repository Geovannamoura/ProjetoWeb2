import React from 'react';
import { Link } from 'react-router-dom';

const Navegacao = () => {
  return (
    <nav className="navegacao">
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/cardapio">Cardápio</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/admin-produtos">Admin</Link></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navegacao;
