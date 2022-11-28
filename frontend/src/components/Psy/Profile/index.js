import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { getDogs } from '../../../features/dogs/dogsSlice'
import { Container, ProfileImage, Wrapper, TextWrapper, Description } from './ProfileStyled'

const Profile = () => {
  const { name, category } = useParams()
  const dispatch = useDispatch()
  const {dogs} = useSelector((state) => state.dogs)
  useEffect(()=>{dispatch(getDogs())}, [dispatch])

  return (<>
   {dogs.map((dogs) => {if(dogs.name === name && dogs.category === category) return(
    <Container >
        <ProfileImage/>
        <Wrapper>
            <TextWrapper>
                <Description>{dogs.name}</Description>
                <a href='facebook.com'></a>
            </TextWrapper>
        </Wrapper>
    </Container>)} )}
    </>
  )
}

export default Profile