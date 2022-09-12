import React, { useState } from 'react'
import { Container } from '../app/Global'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../providers/auth';

export const Saida = () => {
  const { token, nome, email } = React.useContext(AuthContext)
  const navigate = useNavigate()
  const [valor, setValor] = useState('')
  const [descricao, setDescricao] = useState('')
  const saida = {
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
    axios.post('http://localhost:5000/saida', saida, config)
  .then((res) =>{
    alert('Sucesso')
  })
  .catch((err) =>{
    alert('Erro ao Cadastrar Saída')
  })
  }
  return (
    <Container >
      <div className="mar">
      <div className='titulo'>
        <h2>Nova Saida</h2>
      </div>
      <form onSubmit={handleForm}>
          <input type="number" required placeholder='Valor' onChange={(e)=> setValor(e.target.value)}/>
          <input type="text" required placeholder='Descrição' onChange={(e)=> setDescricao(e.target.value)}/>
          <button type="submit">Salvar Nova Saida</button>
      </form>
      </div>
    </Container>
  )
}
