import React from 'react'
import { Boxer, Button, Container, Dobrman, Ovcak, Title, Wrapper } from './CardsStyled'
import { useNavigate } from 'react-router-dom'


const Cards = () => {
    const navigate = useNavigate()

  return (
    <Container>
        <Wrapper>
            <Boxer>
                <Title>Boxer</Title>
                <Button onClick={()=>{
                    navigate(`/NasiPsy/${dogs.category === 'Boxer'}`)}}>Více</Button>
            </Boxer>
            <Ovcak>
                <Title>Německý Ovčák</Title>
                <Button onClick={()=>{
                    navigate(`/NasiPsy/${dogs.Ovcak}`)}}>Více</Button>
            </Ovcak>
            <Dobrman>
                <Title>Dobrman</Title>
                <Button onClick={()=>{
                    navigate(`/NasiPsy/${dogs.Ovcak}`)}}>Více</Button>
            </Dobrman>
        </Wrapper>
    </Container>
  )
}

export default Cards