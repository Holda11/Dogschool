import React from 'react'
import { Container, Wrapper, CenterBox, Text, Input, Button } from '../styles/loginStyled'

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <CenterBox>
                <Text>Uživatelské jméno:</Text>
                <Input/>
                <Text>Heslo:</Text>
                <Input/>
                <Button>Login</Button>
            </CenterBox>
        </Wrapper>
    </Container>
  )
}

export default Login