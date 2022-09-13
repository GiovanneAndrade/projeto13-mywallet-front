import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {Container, H1} from '../app/Global'
import Swal from 'sweetalert2'
export const Cadastro = () => {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirme, setConfirme] = useState('')
  const cadastro = {
    nome: nome,
    email: email,
    senha: senha,
    confirme: confirme
  }
  function handleForm (e){
    e.preventDefault();
    navigate("/")
    axios.post('http://localhost:5000/cadastro', cadastro)
  .then((res) =>{
    Swal.fire({
      title: 'sucesso!',
      text: 'cadastro Feito com Suceso',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  })
  .catch((err) =>{
    Swal.fire({
      title: 'Error!',
      text: 'Erro ao Cadastrar ',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  })
  }
  return (
        <Container >
          <H1>MyWallet</H1>
          <form onSubmit={handleForm}>
            <input type="text" required placeholder='Nome' onChange={(e)=> setNome(e.target.value)}/>
            <input type="email" required  placeholder='E-mail' onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" required placeholder='Senha' onChange={(e)=> setSenha(e.target.value)}/>
            <input type="password" required placeholder='Confirme a senha' onChange={(e)=> setConfirme(e.target.value)}/>
            <button type='submit'>Cadastrar</button>
          </form>
          <Link to={"/"}>
           <p>Já tem uma conta? Entre agora!</p>
          </Link>
      </Container>
  )
}


