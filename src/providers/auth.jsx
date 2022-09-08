import React from 'react';

export const AuthContext = React.createContext({})
const entradas = [
  { valor: 5, descricao: 'Ração do Tesouro', dia: '02/12'},
  { valor: 7, descricao: 'Cartão de Credito e super mercado', dia: '02/10'},
  { valor: 5, descricao: 'Ração do Tesouro muito caro', dia: '12/05'},
   
]
export const AuthProvider = (props) => {
  return (
    <AuthContext.Provider value={{entradas}}>
      {props.children}
    </AuthContext.Provider>
  )
};