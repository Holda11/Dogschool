import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDobrman } from '../../../features/dobrman/dobrmanSlice'
import { Container, Wrapper, Box, Title } from './DobrmanStyled'


const Dobrman = () => {
    const dispatch = useDispatch()
    const {dobrman} = useSelector((state) => state.dobrman)
    useEffect(()=>{dispatch(getDobrman())}, [dispatch])
    
  return (
    <Container>
      <Wrapper>
        {dobrman.map((dobrman) => (
            <Box><Title>{dobrman.name}</Title></Box>
        ))}
        </Wrapper>
    </Container>
  )
}

export default Dobrman