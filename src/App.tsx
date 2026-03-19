import { useState } from 'react'


import UserForm from './components/UserForm'

function App() {

  const [typeUser,setTypeUser] = useState([{ id: 1, omschrijving: 'leerling' }, { id: 2, omschrijving: 'leerkracht' }, { id: 3, omschrijving: 'administratief medewerker' },])
  const [users,setUsers] =  useState<String[]>([])

  const handleSubmit = (user?: string)=>{
    //setUsers --> add user
    //user => firstName, lastName, type
    if (user != null) setUsers([...users, user])
  }
  return (
    <>
        <UserForm onSubmit={handleSubmit}/>
    </>
  )
}

export default App
