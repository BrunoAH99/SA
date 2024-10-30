import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Funcionarios() {
    const [funcionarios, setFuncionarios] = useState([])

    const carregarFuncionarios = async () => {
        const response = await axios.get(`http://localhost:3000/funcionarios`)
        setFuncionarios(Object.values(response.data.listaFuncionarios))
        console.log(response.data)
    }

    useEffect(() => {
        carregarFuncionarios()
    }, [])

    return (
        <div>
            {funcionarios.length > 0 ? (
                funcionarios.map((listaFuncionarios, key) => (
                    <div key={key}>
                        <Link to={`/funcionario/${listaFuncionarios.id}`}  >
                            <p>{listaFuncionarios.nome}</p>
                            <p>{listaFuncionarios.setor}</p>
                        </Link>
                    </div>
                )
                ))
                : (
                    <p>Carregando Funcionarios...</p>
                )}
        </div>
    )
}
