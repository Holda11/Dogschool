import React, {useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Wrapper, CenterDiv, Psy, Novinky, Info, Title,  Button } from '../styles/dashboardStyled'
import Header from '../components/Header'
import {  FaPaw, FaReadme, FaInfo } from 'react-icons/fa'
import { IconContext } from "react-icons";


const Dashboard = () => {
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)
  
  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <IconContext.Provider value={{size: "50px"}}>
    <Header/>
    <Container>
        <Wrapper>
            <CenterDiv>
                <Psy>
                  <FaPaw/>
                  <Title>Psy</Title>
                  <Button><Link to="/PsyDashboard">Více</Link></Button>
                </Psy>
                <Novinky>
                  <FaReadme/>
                  <Title>Novinky</Title>
                  <Button><Link to="/NovinkyDashboard">Více</Link></Button>
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