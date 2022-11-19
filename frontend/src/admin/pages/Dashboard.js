import React from 'react'
import { Container, Wrapper, CenterDiv, Psy, Novinky, Info } from '../styles/dashboardStyled'
import { FaPaw, FaReadme, FaInfo } from 'react-icons/fa'

const Dashboard = () => {
  return (
    <Container>
        <Wrapper>
            <CenterDiv>
                <Psy><FaPaw/></Psy>
                <Novinky><FaReadme/></Novinky>
                <Info><FaInfo/></Info>
            </CenterDiv>
        </Wrapper>
    </Container>
  )
}

export default Dashboard