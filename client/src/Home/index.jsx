import { Link } from 'react-router-dom';
import '../globals.css';
export default function Home() {
    return (
        
        <div className='container'>
            
            <h2>Sistema Acadêmico</h2>
            <div className="card-container">
                <Link to="/livros/cadastrar" className="card">
                    <div>Registrar Livro</div>
                </Link>
                <Link to="/livros" className="card">
                    <div>Lista de Livros</div>
                </Link>
                <Link to="/livros/alterar" className="card">
                    <div>Editar Livro</div>
                </Link>
            </div>
        </div>
    );
}
