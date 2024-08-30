import { Link } from 'react-router-dom';
import '../globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Footers from "../Footer.jsx"
export default function Home() {
    return (
        <>
        <Carousel
        infiniteLoop
        autoPlay
        usekeyboardArrows
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight
        >

        <div>
        <img src ="https://static.estantevirtual.com.br/bnn/l_estantevirtual/2024-08-26/5501_full%2520desk%2520quero%2520tudo.png"/>
        </div>

        <div>
        <img src ="https://static.estantevirtual.com.br/bnn/l_estantevirtual/2024-04-04/9508_homedesk.psicologia.png"/>
        </div>

        </Carousel>
        <div className='container'>
            
            <h2 id="titulo">ESTANTE VIRTUAL</h2>
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
            <Footers/>
            
        </div>
        </>
    );
}
