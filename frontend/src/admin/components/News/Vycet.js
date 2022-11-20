import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import {FaPen, FaTrashAlt} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import styled from 'styled-components'


const Vycet = () => {
 const [vycetOfNews, setVycetOfNews] = useState([])

 useEffect(()=>{
    Axios.get("http://localhost:3001/api/News").then((response)=>{
        setVycetOfNews(response.data)
    })
 },[])

 const Box = styled.div`
 display: flex;
 flex-direction: column;
 `

 const Ul = styled.ul`
 list-style: none;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 `
 const Li = styled.li`
 
 `
 const Title = styled.h4`
  color: black;
  font-size: 24px;
  font-weight: 700;
 `
 const Date = styled.p`
 color: black;
 font-size: 18px;
 font-weight: 500;
 `
 const Div = styled.div`
 display: flex;
 flex-direction: row;
 `
 const ButtonEdit = styled.button`
 size: 24px;
 margin: 0 5px;
 background-color: green;
 border: 1px solid green;
 border-radius: 5px;
 `
 const ButtonDelete = styled.button`
 size: 24px;
 margin: 0 5px;
 background-color: red;
 border: 1px solid none;
 border-radius: 5px;
 `

  return (
    
    <IconContext.Provider value={{color: 'white', size: '18px'}}>
        <Box>
           {vycetOfNews.map((item)=>(
            <>
            <Ul>
                <Li>
                    <Title>{item.title}</Title>
                </Li>
            </Ul>
            <Ul>
                <Li>
                    <Date>{item.date}</Date>
                </Li>
            </Ul>
            <Ul>
                <Li>
                    <Div>
                        <ButtonEdit><FaPen/></ButtonEdit>
                        <ButtonDelete><FaTrashAlt/></ButtonDelete>
                    </Div>
                </Li>
            </Ul>
            </>
           ))}
        </Box>
    </IconContext.Provider>
    
    
    /*<IconContext.Provider value={{color: 'white', size: '18px'}}>
    <Ul>
        {vycetOfNews.map((item)=>(
            <Li>
                <Title>{item.title}</Title>
                <Date>{item.date}</Date>
                <Div> 
                    <ButtonEdit><FaPen/></ButtonEdit>
                    <ButtonDelete><FaTrashAlt/></ButtonDelete>
                </Div>
            </Li>
        ))}
    </Ul>
    </IconContext.Provider>*/
  )
}

export default Vycet