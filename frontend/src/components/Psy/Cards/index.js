import { Boxer, Button, Container, Dobrman, Ovcak, Title, Wrapper } from './CardsStyled'
import {Link} from 'react-router-dom'


//! Dodělat Route
const Cards = () => {
 

  return ( 
      <Container>
        <Wrapper>
            <Boxer>
                <Title>Boxer</Title>
                <Button name="Boxer" value="Boxer" >Více</Button>
            </Boxer>
            <Ovcak>
                <Title>Německý Ovčák</Title>
                <Button name="Ovcak" value="Ovcak">Více</Button>
            </Ovcak>
            <Dobrman>
                <Title>Dobrman</Title>
                <Button name="Dobrman" value="Dobrman"><Link to="/Dobrman">Více</Link></Button>
            </Dobrman>
        </Wrapper>
    </Container> 
  )
}

export default Cards