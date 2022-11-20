import React, {useState, useEffect} from 'react'
import { Container, Wrapper, CenterBox, Text, Input, Button } from '../styles/loginStyled'


//! Dodělat Logout
//! Dodělat Navbar jako komponent

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  })

  const {name, password} = formData

  const onChange = (e) =>{
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Container>
        <Wrapper>
            <CenterBox>
                <Text>Uživatelské jméno:</Text>
                <Input
                type='text'
                id='name'
                name='name'
                value={name}
                placeholder='Zadejte uživatelské jméno'
                onChange={onChange}
                />
                <Text>Heslo:</Text>
                <Input
                type='password'
                id='password'
                name='password'
                value={password}
                placeholder='Zadejte heslo'
                onChange={onChange}
                />
                <Button type='submit'>Login</Button>
            </CenterBox>
        </Wrapper>
    </Container>
  )
}

export default Login