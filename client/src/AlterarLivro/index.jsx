import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateLivro() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [preco, setPreco] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { nome, autor, preco };

    try {
      const response = await fetch(`http://localhost:5000/livros/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('Livro atualizado com sucesso!');
        navigate("/livros");
      } else {
        alert('Erro ao atualizar livro.');
      }
    } catch (error) {
      console.error('Erro ao atualizar livro:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Atualizar livro</h2>
      <input
        type="text"
        placeholder="ID da livro"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome do livro"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Preco"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        required
      />
      <button type="submit">Atualizar livro</button>
    </form>
    </div>
  );
}
