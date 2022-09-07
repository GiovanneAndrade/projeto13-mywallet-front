import React from 'react'
import { Container, Ent, Base, Dados, P } from '../app/Global'
import { Link } from "react-router-dom";
import { MdOutlineRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md'
import { RiLogoutBoxRLine } from 'react-icons/ri'

export const Adicionar = () => {

  
  return (
    <Container>
      <div className='titulo'>
      <h2>Ola, Fulano</h2>
        <RiLogoutBoxRLine/>
      </div>
      <Dados>
        <P>Não há registros de <br /> entrada ou saída</P>
      </Dados>
      <Base>
        <Link to={"/Entrada"}>
          <Ent>
            < MdAddCircleOutline className="icon"/>
            <p>nova entrada</p>
          </Ent>
        </Link>
        <Link to={"/Saida"}>
          <Ent>
            <MdOutlineRemoveCircleOutline className="icon"/>
            <p>nova saida</p>
          </Ent>
        </Link>
      </Base>
    </Container>
  )
}
