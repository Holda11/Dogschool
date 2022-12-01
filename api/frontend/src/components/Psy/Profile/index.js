import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getDogs } from '../../../features/dogs/dogsSlice'
import { Container, ProfileImage, Wrapper, TextWrapper, Description, ImageContainer, Title, DefaultTitle, Row } from './ProfileStyled'

const ProfileDogs = () => {
  const { name, category } = useParams()
  const dispatch = useDispatch()
  const {dogs} = useSelector((state) => state.dogs)
  useEffect(()=>{dispatch(getDogs())}, [dispatch])

  return (<>
   {dogs.map((dogs) => {if(dogs.name === name && dogs.category === category) return(
    <Container >
      <Wrapper>
        <Row>
        <ImageContainer>
        <ProfileImage src={require(`../../../images/`+ dogs.image)} />
        </ImageContainer>
            <TextWrapper>
                <Title>{dogs.name}</Title>  
                <DefaultTitle>Popis:</DefaultTitle>
                <Description>{dogs.description}</Description>
                <a href='facebook.com'></a>
            </TextWrapper>
        </Row>
        </Wrapper>
    </Container>)} )}
    </>
  )
}

export default ProfileDogs