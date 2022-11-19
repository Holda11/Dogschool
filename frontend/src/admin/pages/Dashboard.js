import React from 'react'
import { Container, Wrapper, CenterDiv, Psy, Novinky, Info, Title, Navbar, Button } from '../styles/dashboardStyled'
import {  FaPaw, FaReadme, FaInfo } from 'react-icons/fa'
import { IconContext } from "react-icons";


const Dashboard = () => {
  return (
    <IconContext.Provider value={{size: "50px"}}>
    <Navbar>DogSchool - Admin Panel</Navbar>
    <Container>
        <Wrapper>
            <CenterDiv>
                <Psy>
                  <FaPaw/>
                  <Title>Psy</Title>
                  <Button>Více</Button>
                </Psy>
                <Novinky>
                  <FaReadme/>
                  <Title>Novinky</Title>
                  <Button>Více</Button>
                </Novinky>
                <Info>
                  <FaInfo/>
                  <Title>Informace</Title>
                  <Button>Více</Button>
                </Info>
            </CenterDiv>
        </Wrapper>
    </Container>
    </IconContext.Provider>
  )
}

export default Dashboard