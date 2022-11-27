import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Container, Wrapper, Box } from './ItemsStyled'




const Items = ({cat, filters}) => {
  const [dog, setDogs] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(()=>{
    const getDog = async ()=>{
      try{
        const res = await Axios.get()
      }
    }
  }, [cat])
  
  return (
  <>
    <Container >
        <Wrapper>
            <Box></Box>
        </Wrapper>
    </Container>
   </>
  )
}

export default Items