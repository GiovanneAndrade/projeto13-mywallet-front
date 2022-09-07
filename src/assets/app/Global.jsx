import React from 'react';
import Styled from 'styled-components';

export const Container = Styled.div`
  background-color:  #881bb7;
  width: 400px;
  min-height: 890px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const H1 = Styled.h1`
  font-size: 32px;
  color: #FFFFFF;
  margin: 40px;
`
export const Ent = Styled.div`
  width: 155px;
  height: 114px;
  background: #A328D6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 17px;
`

export const Base = Styled.div`
  display: flex;
  gap:20px;
`
export const Dados = Styled.div`
  display: flex;
  width: 326px;
  height: 446px;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 20px;
  padding:12px;
`
export const P = Styled.p`
  font-size: 20px;
  color: #868686;
  text-align: center;
`
export const Ul = Styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
`
export const Li = Styled.li`
  list-style-type: none;
  font-size: 16px;
  margin:7px;
  
`
export const LiDia = Styled(Li)`
  color: #C6C6C6;
`
export const LiValorDesc = Styled(Li)`
  width: 100%;
  display: flex;
  justify-content: space-between;
   
`






