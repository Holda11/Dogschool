import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getDogs } from '../../../features/dogs/dogsSlice'
import { Container, Wrapper, Box, Title, ImageContainer, Img, LinkDog, Group } from './DogsVycetStyled'


const DogsVycet = () => {
    const {category} = useParams()
    const dispatch = useDispatch()
    const {dogs} = useSelector((state) => state.dogs)
    useEffect(()=>{dispatch(getDogs())}, [dispatch])
    
  return (
    <Container>
      <Wrapper>
        {dogs.map((dogs) =>{ if(dogs.category === category) return(
          <Box>
                <ImageContainer>
                <Img src={require(`../../../images/`+ dogs.image)} />
                <Group>
               <Title>{dogs.name}</Title>
                <LinkDog to={`/${dogs.category}/Profile/${dogs.name}`}>Více</LinkDog>
                </Group>
                </ImageContainer>
              </Box>
            
        )})}
        </Wrapper>
    </Container>
  )
}

export default DogsVycet