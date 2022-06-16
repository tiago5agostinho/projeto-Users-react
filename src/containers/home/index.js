import React, { useState, useRef} from "react";
import Axios from 'axios'
import { useHistory } from "react-router-dom";

import H1 from "../../components/title"
import ContainerItens from "../../components/containersItens";
import Button from "../../components/button"
import {
  Container,
  Img,
  InputLabel,
  Input,
  
} from "./styles";


import Arrow from '../../assets/arrow.svg'
import People from '../../assets/people.svg'



const App = () => {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const history = useHistory()


  async function addNewUser() {

    const {data: newUser} = await Axios.post("http://localhost:3001/users", { 
    name: inputName.current.value, 
    age: inputAge.current.value,
    })

    
    setUsers([ ... users,
    newUser])

    history.push("/usuarios")
  
  }

  

  return (<Container>
    <Img alt="logo-imagem" src={People} />
    <ContainerItens>
     
      <H1 > Olá!</H1>

      <InputLabel>Nome</InputLabel>
      <Input placeholder="Nome" ref={inputName} />

      <InputLabel >Idade</InputLabel>
      <Input placeholder="Idade" ref={inputAge} />

      <Button  onClick={addNewUser}  >Cadastrar  <img alt="seta" src={Arrow} /></Button>

    </ContainerItens>

  </Container>)
}

export default App