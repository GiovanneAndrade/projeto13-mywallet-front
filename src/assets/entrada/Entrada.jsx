import React, { useState } from 'react'
import {Container} from '../app/Global'
import {  useNavigate } from "react-router-dom";
export const Entrada = () => {
  const navigate = useNavigate()
  const [valor, setValor] = useState('')
  const [descriacao, setDescricao] = useState('')
  const entrada = {
    valor: valor,
    descriacao: descriacao,
  }
  function handleForm (e){
    e.preventDefault();
    navigate("/Adicionar")
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
