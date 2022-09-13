import React, { useState } from 'react';
import { LoginUser } from '../servidores/server';
import axios from "axios";
export const AuthContext = React.createContext({})
import Swal from 'sweetalert2'

export const AuthProvider = (props) => {
  const entradas = [
    { valor: 5, descricao: 'Ração do Tesouro', dia: '02/12'},
    { valor: 7, descricao: 'Cartão de Credito e super mercado', dia: '02/10'},
    { valor: 5, descricao: 'Ração do Tesouro muito caro', dia: '12/05'},
  ]
  
  const [ token, setToken ] = useState('')
  const [ nome, setNome] = useState('')
  const [ email, setEmail] = useState('')
  
  function PostLogin (login){
    axios.post('http://localhost:5000/login', login)
    .then((res) =>{
      console.log(res.data)
       setToken(res.data.token)
       setNome(res.data.nome) 
       setEmail(res.data.email) 
    })
    .catch((err) =>{
      Swal.fire({
        title: 'Error!',
        text: 'usuario ou senha não Cadastrado',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      
    })
  }
  return (
    <AuthContext.Provider value={{PostLogin, entradas, token, nome, email}}>
      {props.children}
    </AuthContext.Provider>
  )
};