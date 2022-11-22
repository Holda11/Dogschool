import React from 'react'
import styled from 'styled-components'
import {FaSignOutAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'

const Navbar = styled.nav`
border-bottom: 1px solid grey;
color: white;
background-color: blue;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
font-size: 24px;
font-weight: bold;
padding: 10px 0;
`

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/Login')
    }

  return (
    <Navbar>
        <>DogschoolK9</> 
        {user ? (<button onClick={onLogout}><FaSignOutAlt/></button>) : <></>}
    </Navbar>
  )
}

export default Header