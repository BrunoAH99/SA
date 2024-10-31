import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function FuncionarioDetalhes() {
    
    const { id } = useParams()
    const [funcionario, setFuncionario] = useState('')
    const [error, setError] = useState('')

    const carregarFuncionario = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/funcionario/${id}`)
            setFuncionario(response.data)
        } catch (error) {
            setError('Erro ao carregar funcionário');
            console.error('Erro ao carregar funcionário:', error.response || error)
        }
    }

    useEffect(() => {
        carregarFuncionario()
    }, [id])


    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {funcionario ? (
                <>
                    <p>Nome: {funcionario.nome}</p>
                    <p>Setor: {funcionario.setor}</p>
                    <p>Email: {funcionario.email}</p>
                    <p>Telefone: {funcionario.telefone}</p>
                    <p>Matricula: {funcionario.id}</p>
                </>
            ) : (
                <p>Funcionário não encontrado.</p>
            )}
        </div>
    )
}
