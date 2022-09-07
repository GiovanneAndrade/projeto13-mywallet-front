import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../login/Login'
import  {Cadastro}  from "../cadastro/Cadastro";

function App (){
return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Cadastro' element={<Cadastro/>}/>
    </Routes>
  </BrowserRouter>
  )
}
export default  App;