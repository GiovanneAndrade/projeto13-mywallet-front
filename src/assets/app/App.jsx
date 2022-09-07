import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../login/Login'
import  {Cadastro}  from "../cadastro/Cadastro";
import { Adicionar } from "../adicionar/Adicionar";
import { Entrada } from "../entrada/Entrada";

function App (){
return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Cadastro' element={<Cadastro/>}/>
      <Route path='/Adicionar' element={<Adicionar/>}/>
      <Route path='/Entrada' element={<Entrada/>}/>
    </Routes>
  </BrowserRouter>
  )
}
export default  App;