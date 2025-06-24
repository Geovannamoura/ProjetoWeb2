import CafeCard from '../components/CafeCard';
import React, { useState, useEffect } from 'react';
import Carrinho from '../components/Carrinho';


const produtosFixos = [
  {
    id: 100,
    nome: 'Café Expresso',
    categoria: 'Bebida',
    tipo: 'Quente',
    preco: 5.0,
    descricao: 'Café forte e encorpado, servido em dose única.',
    imagem: '../imagens/cafe.jpg', 
  },
  {
    id: 200,
    nome: 'Cappuccino',
    categoria: 'Bebida',
    tipo: 'Quente',
    preco: 7.5,
    descricao: 'Café com leite e espuma, polvilhado com canela.',
    imagem: '../imagens/cappuccino.jpg', 
  },
  {
    id: 300,
    nome: 'Pão de Queijo',
    categoria: 'Salgado',
    preco: 4.0,
    descricao: 'Tradicional pão de queijo mineiro, quentinho.',
    imagem: '../imagens/pao-de-queijo.jpg',
  },
  {
    id: 400,
    nome: 'Bolo de chocolate',
    categoria: 'Doce',
    preco: 6.0,
    descricao: 'Bolo caseiro com cobertura de chocolate.',
    imagem: '../../imagens/bolo-de-chocolate.jpg',
  },
  {
    id: 500,
    nome: 'Croissant',
    categoria: 'Salgado',
    preco: 6.5,
    descricao: 'Croissant amanteigado, leve e macio.',
    imagem: '../imagens/croissant.jpg',
  },
  {
    id: 6,
    nome: 'Croissant com Nutella',
    categoria: 'Doce',
    preco: 6.5,
    descricao: 'Croissant amanteigado, leve, macio e recheado com Nutella.',
    imagem: '../imagens/croissant.jpg',
  },
  {
    id: 7,
    nome: 'Misto quente',
    categoria: 'Salgado',
    preco: 6.5,
    descricao: 'Pão de forma com queijo e presunto, grelhado na chapa.',
    imagem: '../imagens/misto-quente.jpg',
  },
  {
    id: 8,
    nome: 'Croissant com queijo',
    categoria: 'Salgado',
    preco: 6.5,
    descricao: 'Croissant amanteigado, leve e macio, recheado com queijo.',
    imagem: '../imagens/croissant.jpg',
  },
  {
    id: 9,
    nome: 'Tapioca com ovo',
    categoria: 'Salgado',
    preco: 10.5,
    descricao: 'Tapioca recheada com ovo, leve e saudável.',
    imagem: '../imagens/tapioca-ovo.jpg',
  },
  {
    id: 10,
    nome: 'Mochaccino',
    categoria: 'Bebida',
    tipo: 'Quente',
    preco: 8.5,
    descricao: 'Mochaccino cremoso, mistura de café, chocolate e leite.',
    imagem: '../imagens/mochaccino.jpg',
  },
  {
    id: 11,
    nome: 'Frappuccino de Caramelo',
    categoria: 'Bebida',
    tipo: 'Gelada',
    preco: 18.5,
    descricao: 'Frappuccino gelado com calda de caramelo e chantilly.',
    imagem: '../imagens/frappucino-caramelo.jpg',
  },
  {
    id: 12,
    nome: 'Frappuccino de Chocolate',
    categoria: 'Bebida',
    tipo: 'Gelada',
    preco: 18.5,
    descricao: 'Frappuccino gelado com calda de chocolate e chantilly.',
    imagem: '../imagens/frappucino-chocolate.jpg',
  }
];

const Home = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [produtos, setProdutos] = useState([]);

  // Carrega produtos do sessionStorage e combina com os fixos
  useEffect(() => {
  const produtosSalvos = JSON.parse(sessionStorage.getItem('produtos')) || [];
  console.log('Produtos carregados do sessionStorage no Home:', produtosSalvos);
  const todos = [...produtosFixos, ...produtosSalvos];
  setProdutos(todos);
}, []);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((anterior) => [...anterior, produto]);
  };

  const removerDoCarrinho = (index) => {
    setCarrinho((anterior) => anterior.filter((_, i) => i !== index));
  };

  const toggleCarrinho = () => {
    setMostrarCarrinho(!mostrarCarrinho);
  };

  const renderCategoria = (titulo, filtro) => (
    <>
      <h2 style={{ fontSize: '28px', margin: '40px 0 20px' }}>{titulo}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {produtos
          .filter(filtro)
          .map((produto) => (
            <CafeCard
              key={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              categoria={produto.categoria}
              imagem={produto.imagem}
              aoAdicionar={() => adicionarAoCarrinho(produto)}
            />
          ))}
      </div>
    </>
  );

  return (
    <div style={{ position: 'relative', padding: '20px' }}>
      <button
        onClick={toggleCarrinho}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#76530ede',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '20px',
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        🛒
      </button>

      {mostrarCarrinho && (
        <Carrinho
          visivel={mostrarCarrinho}
          toggle={toggleCarrinho}
          itens={carrinho}
          onRemover={removerDoCarrinho}
        />
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {renderCategoria('Salgados', (p) => p.categoria === 'Salgado')}
        {renderCategoria('Doces', (p) => p.categoria === 'Doce')}
        {renderCategoria('Bebidas Quentes', (p) => p.categoria === 'Bebida' && p.tipo === 'Quente')}
        {renderCategoria('Bebidas Geladas', (p) => p.categoria === 'Bebida' && p.tipo === 'Gelada')}
      </div>
    </div>
  );
};

export default Home;
