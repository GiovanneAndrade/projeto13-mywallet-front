import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../login/Login'
import  {Cadastro}  from "../cadastro/Cadastro";
import { Adicionar } from "../adicionar/Adicionar";
import { Entrada } from "../entrada/Entrada";
import { Saida } from "../saida/Saida";

function App (){
return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Cadastro' element={<Cadastro/>}/>
      <Route path='/Adicionar' element={<Adicionar/>}/>
      <Route path='/Entrada' element={<Entrada/>}/>
      <Route path='/Saida' element={<Saida/>}/>
    </Routes>
  </BrowserRouter>
  )
}
export default  App;