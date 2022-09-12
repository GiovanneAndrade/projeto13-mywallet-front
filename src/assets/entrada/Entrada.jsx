import React, { useState } from 'react'
import {Container} from '../app/Global'
import {  useNavigate } from "react-router-dom";
import { AuthContext } from '../../providers/auth';
import axios from "axios";

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
      alert('Sucesso')
    })
    .catch((err) =>{
      alert('Erro ao Cadastrar Saída')
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
