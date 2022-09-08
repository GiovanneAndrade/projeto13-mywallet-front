import React from 'react'
import { Container, Ent, Base, Dados, P, Ul, Li, LiDia, LiValorDesc } from '../app/Global'
import { Link } from "react-router-dom";
import { MdOutlineRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { AuthContext } from '../../providers/auth';


export const Adicionar = () => {
  const { entradas } = React.useContext(AuthContext)
 console.log(entradas)
 
  return (
    <Container>
      <div className='titulo'>
        <h2>Ola, Fulano</h2>
        <RiLogoutBoxRLine/>
      </div>
      <Dados>
        {entradas.length === 0 ? (<P>Não há registros de <br /> entrada ou saída</P>) : 
         entradas.map((item, index) => 
              <Ul key={index}>
                <LiDia>{item.dia}</LiDia>
                <LiValorDesc>
                  <Li>{item.descricao}</Li>
                  <Li>{item.valor}</Li> 
                </LiValorDesc>
              </Ul>
        ) }
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
