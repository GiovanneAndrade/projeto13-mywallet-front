import React, { useState } from 'react'
import {Container, H1} from '../app/Global'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../providers/auth';

function App() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { PostLogin } = React.useContext(AuthContext)
  const logim = {
    email: email,
    senha: senha
  }
  function handleForm (e){
    e.preventDefault();
    PostLogin(logim)
    navigate("/Adicionar")
  }
 return (
   <Container >
      <H1>MyWallet</H1>
      <form onSubmit={handleForm}>
        <input type="email" required  placeholder='E-mail' onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" required  placeholder='Senha' onChange={(e)=> setSenha(e.target.value)}/>
        <button type='submit'> Enviar  </button>
      </form>
      <Link to={"/Cadastro"}>
       <p>Primeira vez? Cadastre-se!</p>
      </Link>
   </Container>
 )

}

export default App
