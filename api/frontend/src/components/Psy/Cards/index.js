import { Boxer, Button, Container, Dobrman, Ovcak, Title, Wrapper } from './CardsStyled'
import {Link} from 'react-router-dom'


//! Dodělat Route
const Cards = () => {
 

  return ( 
      <Container>
        <Wrapper>
            <Boxer>
                <Title>Boxer</Title>
                <Button name="Boxer" value="Boxer" ><Link to="/NasiPsy/Boxer">Více</Link></Button>
            </Boxer>
            <Ovcak>
                <Title>Německý Ovčák</Title>
                <Button name="Ovcak" value="Ovcak"><Link to="/NasiPsy/Ovcak">Více</Link></Button>
            </Ovcak>
            <Dobrman>
                <Title>Dobrman</Title>
                <Button name="Dobrman" value="Dobrman"><Link to="/NasiPsy/Dobrman">Více</Link></Button>
            </Dobrman>
        </Wrapper>
    </Container> 
  )
}

export default Cards