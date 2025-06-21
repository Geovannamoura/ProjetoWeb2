import React from 'react';

const Sobre = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '36px', color: '#76530ede' }}>Sobre a Coffee Station</h1>
      <p style={{ fontSize: '18px', color: '#444', marginTop: '20px' }}>
        Fundada com amor por café e pessoas, a <strong>Coffee Station</strong> nasceu com o propósito de ser mais do que uma cafeteria — 
        queremos ser um ponto de encontro, uma estação de pausa na sua rotina.
      </p>

      <img
        src="../imagens/cafeteria-fachada.jpg"
        alt="Cafeteria Coffee Station"
        style={{ width: '100%', borderRadius: '12px', margin: '30px 0' }}
      />

      <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
        Desde o início, valorizamos a qualidade dos nossos grãos, o preparo artesanal e o carinho em cada xícara servida.
        Trabalhamos com fornecedores locais e sustentáveis, e buscamos oferecer experiências únicas com nossos cafés especiais,
        doces caseiros e salgados fresquinhos.
      </p>

      <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', marginTop: '20px' }}>
        Nossa missão é proporcionar um ambiente acolhedor, onde cada pessoa se sinta bem-vinda — seja para uma pausa rápida ou
        para uma boa conversa. Aqui, cada detalhe é pensado para que seu momento seja especial.
      </p>

      <h3 style={{ marginTop: '40px', color: '#76530ede' }}>Venha nos visitar e viva a experiência Coffee Station!</h3>
    </div>
  );
};

export default Sobre;
