import React, { useState, useEffect } from 'react';

const AdminProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({
    id: '',
    nome: '',
    preco: '',
    categoria: '',
    descricao: '',
    imagem: ''
  });

  const [modoEdicao, setModoEdicao] = useState(false);
  const [indiceEditando, setIndiceEditando] = useState(null);

  // Carrega produtos do sessionStorage ao iniciar
  useEffect(() => {
    const dadosSalvos = sessionStorage.getItem('produtos');
    if (dadosSalvos) {
        console.log('Lendo produtos do sessionStorage:', JSON.parse(dadosSalvos))
        setProdutos(JSON.parse(dadosSalvos));
    }
  }, []);

  // Salva produtos no sessionStorage sempre que mudarem
  useEffect(() => {
    console.log('Salvando produtos no sessionStorage:', produtos);
    sessionStorage.setItem('produtos', JSON.stringify(produtos));
  }, [produtos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const adicionarProduto = () => {
  if (!form.nome || !form.preco) return alert('Nome e preço são obrigatórios!');

  const novoProduto = {
    ...form,
    id: Date.now() // Gera um ID único com base no timestamp
  };

  setProdutos([...produtos, novoProduto]);
  setForm({ id: '', nome: '', preco: '', categoria: '', descricao: '', imagem: '' });
};

  const editarProduto = (index) => {
    setForm(produtos[index]);
    setModoEdicao(true);
    setIndiceEditando(index);
  };

  const salvarEdicao = () => {
    const atualizados = [...produtos];
    atualizados[indiceEditando] = { ...form };
    setProdutos(atualizados);
    setForm({
      id: '',
      nome: '',
      preco: '',
      categoria: '',
      descricao: '',
      imagem: ''
    });
    setModoEdicao(false);
    setIndiceEditando(null);
  };

  const removerProduto = (index) => {
    const novos = produtos.filter((_, i) => i !== index);
    setProdutos(novos);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Gerenciar Produtos</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do produto"
          value={form.nome}
          onChange={handleChange}
          style={{ marginRight: '8px' }}
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
          style={{ marginRight: '8px' }}
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoria"
          value={form.categoria}
          onChange={handleChange}
          style={{ marginRight: '8px' }}
        />
        <input
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
          style={{ marginRight: '8px' }}
        />
        <input
          type="text"
          name="imagem"
          placeholder="URL da imagem"
          value={form.imagem}
          onChange={handleChange}
        />
        <button onClick={modoEdicao ? salvarEdicao : adicionarProduto} style={{ marginLeft: '10px' }}>
          {modoEdicao ? 'Salvar' : 'Adicionar'}
        </button>
      </div>

      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Imagem</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>R$ {parseFloat(produto.preco).toFixed(2)}</td>
              <td>{produto.categoria}</td>
              <td>{produto.descricao}</td>
              <td>
                <img src={produto.imagem} alt={produto.nome} width="60" />
              </td>
              <td>
                <button onClick={() => editarProduto(index)}>Editar</button>{' '}
                <button
                  onClick={() => removerProduto(index)}
                  style={{
                    color: 'red',
                    border: '1px solid red',
                    background: 'transparent',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProdutos;
