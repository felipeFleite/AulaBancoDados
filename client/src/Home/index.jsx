import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div className='container'>
            <h2>Sistema Acadêmico</h2>
            <div className="card-container">
                <Link to="/matricula/cadastrar" className="card">
                    <div>Registrar Matrícula</div>
                </Link>
                <Link to="/livros" className="card">
                    <div>Lista de Livros</div>
                </Link>
                <Link to="/matriculas/alterar" className="card">
                    <div>Editar Matrícula</div>
                </Link>
            </div>
        </div>
    );
}
