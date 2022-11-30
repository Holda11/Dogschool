import React, {useState} from 'react'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import { Container,Arrow,ImgContainer, InfoContainer, Slide, Wrapper, Title, Desc, Button, Image } from './SliderStyled'
import { sliderItems } from '../../data/SliderData'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 :2)
        } else{ 
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }


  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <FaArrowLeft/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) =>(
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
            <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
                <Title titleColor={item.titleColor}>{item.title}</Title>
                <Desc>{item.desc} </Desc>
                <Button>Více</Button>
            </InfoContainer>
            </Slide>))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <FaArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider