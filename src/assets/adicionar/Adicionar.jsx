import React, { useEffect, useState } from 'react'
import { Container, Ent, Base, Dados, P, Ul, Li, LiDia, LiValorDesc } from '../app/Global'
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { AuthContext } from '../../providers/auth';
import axios from "axios";

export const Adicionar = () => {
  const { token, nome, email } = React.useContext(AuthContext)
  const [entradasSaidas, setEntradasSaidas] = useState([])
   const somanteSaidas = entradasSaidas.filter((i) => {
    if (i.tipo === "saida"){
    return i
    }
  })
  const total = somanteSaidas.reduce(getTotal, 0);
  function getTotal(total, item) {
    return Number(total) + Number(item.valor) ;
  }
 
  const somanteEntradas = entradasSaidas.filter((i) => {
    if (i.tipo === "entrada"){
      return i
    }
  }) 
  const totalPar = somanteEntradas.reduce(getTotalPar, 0);
  function getTotalPar(totalPar, item) {
    return Number(totalPar) + Number(item.valor) ;
  }
  
   const saldo =  totalPar - total
     const config = {
      headers: {
      authorization: `Bearer${token}`,
      nome: nome,
      email: email
      },
    };
   
    useEffect(()=>{
      axios.get('http://localhost:5000/entradaEsaida', config)
      .then((res) =>{   
        setEntradasSaidas(res.data)
      })
      .catch((err) =>{
      })
    },[token])

  return (
    <Container>
      <div className='titulo'>
        <h2>Ola, {nome}</h2>
        <RiLogoutBoxRLine/>
      </div>
      <Dados>
        {entradasSaidas.length === 0 ? (<P>Não há registros de <br /> entrada ou saída</P>) : 
         entradasSaidas.map((item, index) => 
              <Ul key={index}>
                <LiDia>{item.dia}</LiDia>
                <LiValorDesc>
                  <Li>{item.descricao}</Li>
                  <Li style={{ color: item.tipo == "saida" ? "red" : "#03AC00" }}  >{item.valor}</Li>                   
                </LiValorDesc>       
              </Ul>
                
        ) }
         <div className="saldo">
        <p className="sal">Saldo</p>
            {saldo}  
          </div>
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
