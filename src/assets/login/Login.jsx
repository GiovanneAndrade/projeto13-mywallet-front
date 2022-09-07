import React from 'react'
import {Container, H1} from '../routes/Global'
import { Link } from "react-router-dom";

function App() {
 return (
  
 <Container >
  <H1>MyWallet</H1>
  <form>
   <input type="text"  placeholder='E-mail'/>
   <input type="text"  placeholder='Senha'/>
   <button>Enviar</button>
  </form>
  <Link to={"/Cadastro"}>
   <p>Primeira vez? Cadastre-se!</p>
  </Link>
 </Container>
)

}

export default App
