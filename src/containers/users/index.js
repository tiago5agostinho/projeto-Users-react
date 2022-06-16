import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import H1 from "../../components/title"
import ContainerItens from "../../components/containersItens";
import Button from "../../components/button";

import {
  Container,
  Img,
  User
} from "./styles";

import avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import Axios from "axios";


const Listusers = () => {

  const [users, setUsers] = useState([])
  

const History = useHistory()

 

  useEffect(() => {
    async function fetchUsers(){
    const {data: newUsers} = await Axios.get("http://localhost:3001/users")

  setUsers(newUsers)
    }
  
    fetchUsers()
  },[])




 async function deleteUser(userId) {

  await Axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }

  function golBackPage() {
    History.push("/")
  }


  return (<Container>
    <Img alt="logo-imagem" src={avatar} />
    <ContainerItens isBlur={true}>
      <H1> Usuários</H1>
      

      <ul>
        {users.map(user => (
          <User key={user.id}>
            <p> {user.name}</p> <p>{user.age}</p>

            <button onClick={() => deleteUser(user.id)}><img src={Trash} alt=" trash" /></button>
          </User>

        ))
        
        }

      </ul>

      <Button isBack= {true} onClick={golBackPage}> <img alt="seta"src={Arrow}/> Voltar  </Button>

    </ContainerItens>

  </Container>)
}

export default Listusers




