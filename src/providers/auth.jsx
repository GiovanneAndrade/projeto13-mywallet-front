import React from 'react';

export const AuthContext = React.createContext({})
const user = [
  {nome: 'ola'}
]
export const AuthProvider = (props) => {
  return (
    <AuthContext.Provider value={{user}}>
      {props.children}
    </AuthContext.Provider>
  )
};