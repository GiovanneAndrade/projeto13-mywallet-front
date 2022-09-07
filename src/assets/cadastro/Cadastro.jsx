import React from 'react'
import { Link } from "react-router-dom";
import {Container, H1} from '../app/Global'

export const Cadastro = () => {
  return (
        <Container >
          <H1>MyWallet</H1>
          <form>
            <input type="text"  placeholder='Nome'/>
            <input type="text"  placeholder='E-mail'/>
            <input type="text"  placeholder='Senha'/>
            <input type="text"  placeholder='Confirme a senha'/>
            <button>Cadastrar</button>
          </form>
          <Link to={"/"}>
           <p>Já tem uma conta? Entre agora!</p>
          </Link>
      </Container>
  )
}


