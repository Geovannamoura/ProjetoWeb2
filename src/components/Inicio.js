import React from 'react';

const Inicio = () => {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Bem-vindo à <span style={{ color: '#76530ede' }}>Coffe Station</span> ☕</h1>
      <p style={{ fontSize: '18px', color: '#444' }}>
        A combinação perfeita de aroma, sabor e aconchego. <br />
        Venha viver momentos especiais com nossos cafés, doces e salgados artesanais.
      </p>

      <img
        src="../imagens/cafeteria.jpg"
        alt="Imagem principal da cafeteria"
        style={{ width: '100%', borderRadius: '12px', marginTop: '30px' }}
      />

      <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        <div style={{ maxWidth: '300px' }}>
          <img
            src="../imagens/cafe.jpg"
            alt="Café"
            style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover' }}
          />
          <h3 style={{ marginTop: '10px', color: '#76530ede' }}>Cafés Especiais</h3>
          <p style={{ fontSize: '14px' }}>Do expresso intenso aos gelados refrescantes. Temos um café para cada momento.</p>
        </div>

        <div style={{ maxWidth: '300px' }}>
          <img
            src="../imagens/bolo-de-chocolate.jpg"
            alt="Doces"
            style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover' }}
          />
          <h3 style={{ marginTop: '10px', color: '#76530ede' }}>Doces Artesanais</h3>
          <p style={{ fontSize: '14px' }}>Bolos, tortas e sobremesas feitas com carinho e ingredientes frescos.</p>
        </div>

        <div style={{ maxWidth: '300px' }}>
          <img
            src="../imagens/croissant.jpg"
            alt="Salgados"
            style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover' }}
          />
          <h3 style={{ marginTop: '10px', color: '#76530ede' }}>Salgados de Verdade</h3>
          <p style={{ fontSize: '14px' }}>Pães de queijo, croissants e lanches que alimentam e encantam.</p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
