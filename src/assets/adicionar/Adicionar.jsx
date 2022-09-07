import React from 'react'
import {Container, H1, Ent, Base, Dados, P} from '../app/Global'
import { Link } from "react-router-dom";


export const Adicionar = () => {
  return (
    <Container>
      <H1>Ola, Fulano</H1>
      <Dados>
        <P>Não há registros de <br /> entrada ou saída</P>
      </Dados>
     <Link to={"/Entrada"}>
      <Base>
        <Ent><p>nova entrada</p></Ent>
        <Ent><p>nova entrada</p></Ent>
      </Base>
      </Link>
    </Container>
  )
}
