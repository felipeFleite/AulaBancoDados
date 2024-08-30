import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function CreateLivro() {
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [preco, setPreco] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoLivro = { nome, autor, preco };

    try {
      const response = await fetch('http://localhost:5000/livros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoLivro),
      });
      if (response.ok) {
        alert('Livro criado com sucesso!');
        setNome('');
        setAutor('');
        setPreco('');
        navigate("/livros");
      } else {
        alert('Erro ao criar livro.');
      }
    } catch (error) {
      console.error('Erro ao criar livro:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Criar Livro</h2>
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
      <button type="submit">Criar Livro</button>
    </form>
    </div>
  );
}
