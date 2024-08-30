import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadLivros() {
  const [livros, setLivros] = useState([]);


  useEffect(() => {
    const fetchLivro = async () => {
      try {
        const response = await fetch('http://localhost:5000/livros');
        const data = await response.json();
        setLivros(data);
        
      } catch (error) {
        console.error('Erro ao buscar as livro:', error);
      }
    };

    fetchLivro();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/livros/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setLivros(livros.filter((livros) => livros._id !== id));
        alert('Livro excluído com sucesso!');
      } else {
        alert('Erro ao excluir livro.');
      }
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Lista de Livros</h2>
      <table  className="table-container" border="1">
        <thead>
          <tr>
            <th>Código Livro</th>
            <th>Nome do Livro</th>
            <th>Autor</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro._id}>
              <td>{livro._id}</td>
              <td>{livro.nome}</td>
              <td>{livro.autor}</td>
              <td>R$: {livro.preco}</td>
              <td>
                <button onClick={() => handleDelete(livro._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
