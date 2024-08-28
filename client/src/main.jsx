import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateMatricula from './CriarMatricula'
import ReadLivros from './ListarLivro'
import UpdateMatricula from './AlterarMatricula'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={ <Home/> }/>
                  <Route path="/matricula/cadastrar" element={ <CreateMatricula/> }/>
                  <Route path="/livros" element={ <ReadLivros/> }/>
                  <Route path="/matriculas/alterar" element={ <UpdateMatricula/>}/>
            </Routes> 
      </BrowserRouter>
  </React.StrictMode>,
)



