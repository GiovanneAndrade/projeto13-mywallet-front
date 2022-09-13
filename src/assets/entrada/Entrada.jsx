import React, { useState } from 'react'
import {Container} from '../app/Global'
import {  useNavigate } from "react-router-dom";
import { AuthContext } from '../../providers/auth';
import axios from "axios";
import Swal from 'sweetalert2'

export const Entrada = () => {
  const { token, nome, email } = React.useContext(AuthContext)
  const navigate = useNavigate()
  const [valor, setValor] = useState('')
  const [descricao, setDescricao] = useState('')
  const entrada = {
    valor: valor,
    descricao: descricao,
    nome: nome,
    email: email
  }
  const config = {
    headers: {
    authorization: `Bearer${token}`,
    },
  };
  function handleForm (e){
    e.preventDefault();
    navigate("/Adicionar")
    axios.post('http://localhost:5000/entrada', entrada, config)
    .then((res) =>{
      Swal.fire({
        title: 'sucesso!',
        text: 'Entrada cadastrada com Suceso',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    })
    .catch((err) =>{
      Swal.fire({
        title: 'Error!',
        text: 'Erro ao Cadastrar Entrada! Mínimo 4 Dígitos',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    })
  }
  return (
    <Container >
      <div className='mar'>
        <div className='titulo'>
         <h2>Nova Entrada</h2>
        </div> 
        <form onSubmit={handleForm}>
          <input type="number" required placeholder='Valor' onChange={(e)=> setValor(e.target.value)}/>
          <input type="text" required placeholder='Descrição' onChange={(e)=> setDescricao(e.target.value)}/>
          <button type="submit">Salvar Nova Entrada</button>
        </form>
      </div>
      </Container>
  )
}
