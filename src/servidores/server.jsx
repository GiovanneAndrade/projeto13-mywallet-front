import axios from "axios";
import React from 'react'

const URLs = 'http://localhost:5000'



  function LoginUser (login){
    const promise = axios.post('http://localhost:5000/login', 
    
    )
    return promise;
  } 
  export {  LoginUser }