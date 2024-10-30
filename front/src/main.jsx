import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './index.css'
import CadastrarEPI from './CadastroEPI'
import Home from './Home'
import CadastrarFuncionario from './CadastrarFuncionario'
import Inicial from './Inicial'
import Funcionarios from './ListaFuncionario'
import Funcionario from './Funcionario'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/epi/cadastro",
    element: <CadastrarEPI />
  },
  {
    path: "/funcionario/cadastro", 
    element: <CadastrarFuncionario />,
  },
  {
    path: "/princpal", 
    element: <Inicial />,
  },
  {
    path: "/lista_funcionarios",
    element: <Funcionarios/>,
  },
  {
    path: "/funcionario/:id",
    element: <Funcionario/>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
