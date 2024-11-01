import React from 'react'
import { Link } from 'react-router-dom'

function Inicial() {


    return (
        <div className='inicial_tela'>
            <div className='inicial_cabecalho'>
                <h1>EPI Center</h1>
                <div>
                    <Link to={`/funcionario/cadastro`}  >
                        <button className='inicial_cabecalho_bt'>
                            Cadastrar Funcionario
                        </button>
                    </Link>
                    <Link to={`/epi/cadastro`}  >
                        <button className='inicial_cabecalho_bt'>
                            Cadastrar EPI
                        </button>
                    </Link>
                </div>
            </div>
            <div className='inicial_campo_lista'>
                <Link to={`/lista_funcionarios`}  >
                    <button className='inical_bt_lista'> FUNCIONARIOS </button>
                </Link>
                <Link to={`/lista_EPIs`} >
                    <button className='inical_bt_lista'> EPIs</button>
                </Link>
                <Link to={`/registro`} >
                    <button className='inical_bt_lista'> Registro</button>
                </Link>
            </div>

        </div>
    )
}

export default Inicial
