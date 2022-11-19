import React from 'react'
import {FaChevronRight} from 'react-icons/fa'
import { Container, Description, Title, Button, Input, InputContainer } from './NewsStyled'


const Newsletter = () => {
  return (
    <Container>
        <Title>Novinky</Title>
        <Description>Dostaňte jako první informace o našech novinkách.</Description>
        <InputContainer>
        <Input placeholder="Váš Email" />
        <Button>
             <FaChevronRight/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter