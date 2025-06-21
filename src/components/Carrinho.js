import React from 'react';

const Carrinho = ({ visivel, toggle, itens, onRemover }) => {
  const total = itens.reduce((acc, item) => acc + item.preco, 0);

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={toggle}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: '#76530e',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 999
        }}
        title="Abrir carrinho"
      >
        🛒
      </button>

      {visivel && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            right: '20px',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '12px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            width: '300px',
            zIndex: 1000,
            maxHeight: '400px',
            overflowY: 'auto',
            padding: '16px'
          }}
        >
          <h2>Carrinho</h2>
          {itens.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <>
              <ul>
                {itens.map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>
                    {item.nome} - R$ {item.preco.toFixed(2)}{' '}
                    <button onClick={() => onRemover(index)} style={{ 
                        marginLeft: '10px',
                        padding: '4px 8px',
                        backgroundColor: 'transparent',
                        border: '1px solid red',
                        color: 'red',
                        borderRadius: '4px',
                        cursor: 'pointer'
                        }}>
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
              <h3>Total: R$ {total.toFixed(2)}</h3>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Carrinho;
