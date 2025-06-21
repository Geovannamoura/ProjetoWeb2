import React from 'react';
import './CafeCard.css';

const CafeCard = ({ nome, descricao, preco, categoria, imagem, aoAdicionar }) => {
  return (
    <div className="cafe-card">
      <img src={imagem} alt={nome} className="cafe-imagem" />
      <h3>{nome}</h3>
      <p><strong>Categoria:</strong> {categoria}</p>
      <p><strong>Preço:</strong> R$ {preco.toFixed(2)}</p>
      <p>{descricao}</p>
        <button onClick={aoAdicionar}>Adicionar ao carrinho</button>
    </div>
  );
};

export default CafeCard;
