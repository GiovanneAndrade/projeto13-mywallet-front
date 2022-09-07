import React from 'react'
import { Container, Ent, Base, Dados, P, Ul, Li, LiDia, LiValorDesc } from '../app/Global'
import { Link } from "react-router-dom";
import { MdOutlineRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { AuthContext } from '../../providers/auth';


export const Adicionar = () => {
  const { user } = React.useContext(AuthContext)
 
  const entradas =[
    { valor: 5, descricao: 'Ração do Tesouro', dia: '02/12'},
    { valor: 7, descricao: 'Cartão de Credito e super mercado', dia: '02/10'},
    { valor: 5, descricao: 'Ração do Tesouro muito caro', dia: '12/05'},
    { valor: 7, descricao: 'Cartão de Credito carro', dia: '04/11'} 
  ]
  
  return (
    <Container>
      <div className='titulo'>
      <h2>Ola, Fulano</h2>
        <RiLogoutBoxRLine/>
      </div>
      <Dados>
        {entradas.length === 0 ? (<P>Não há registros de <br /> entrada ou saída</P>) : 
         entradas.map((item) => 
              <Ul>
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
