import React from 'react'
import { Container, HeaderTitle, ImageContainer, Img, ImgText, Left, Li, MarginLeft, Right, Row, SocialLi, SocialUl, Title, Ul, Wrapper } from './KontaktStyled'
import {FaFacebook ,FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTiktok} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import Ludek from '../../images/Ludek.jpg'

const KontaktComponent = () => {
  return (
    <IconContext.Provider value={{size: "28px"}}>
    <Container>
        <HeaderTitle>Kontakt</HeaderTitle>
        <Wrapper>
            <Row>
                <Left>
                    <Title>Kontaktní údaje</Title>
                    <Ul>
                        <Li><FaUser/><MarginLeft>Luděk Šilhavý</MarginLeft> </Li>
                        <Li><FaPhoneAlt/><a href='tel: +420777260666'><MarginLeft>+420777260666</MarginLeft> </a></Li>
                        <Li><FaEnvelope/><a href='mailto: LSilhavy@seznam.cz'><MarginLeft>LSilhavy@seznam.cz</MarginLeft></a></Li>
                        <Li><FaMapMarkerAlt/><MarginLeft>Čejtice 13, 28522, Czech repulic</MarginLeft></Li>
                        <Li>
                            <SocialUl>
                                <SocialLi><IconContext.Provider value={{size: "42px"}}><FaFacebook/></IconContext.Provider></SocialLi>
                                <SocialLi><IconContext.Provider value={{size: "42px"}}><FaInstagram/></IconContext.Provider></SocialLi>
                                <SocialLi><IconContext.Provider value={{size: "42px"}}><FaTiktok/></IconContext.Provider></SocialLi>
                                </SocialUl>
                        </Li>
                    </Ul>
                </Left>
                <Right>
                    <ImageContainer>
                        <Img src={Ludek}/>
                        <ImgText>Luděk Šilhavý</ImgText>
                    </ImageContainer>
                </Right>
            </Row>
        </Wrapper>
    </Container>
    </IconContext.Provider>
  )
}

export default KontaktComponent