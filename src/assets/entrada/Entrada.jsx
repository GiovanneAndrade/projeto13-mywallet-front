import React from 'react'
import {Container, H1} from '../app/Global'
import { Link } from "react-router-dom";
export const Entrada = () => {
  return (
    <Container >
          <H1>Nova Entrada</H1>
          <form>
            <input type="text"  placeholder='Valor'/>
            <input type="text"  placeholder='Descrição'/>
            <Link to={"/"}>
             <button>Salvar Nova Entrada</button>
            </Link>
          </form>
      </Container>
  )
}
