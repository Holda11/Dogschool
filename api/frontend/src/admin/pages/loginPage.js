import React, {useState, useEffect} from 'react'
import { Container, Wrapper, CenterBox, Text, Input, Button } from '../styles/loginStyled'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {login, reset}from '../../features/auth/authSlice'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


//! Dodělat Logout
//! Dodělat Navbar jako komponent
const Login = () => {
  //Definování stavu
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  })

  
  const {name, password} = formData
  //* funkce na přesměrování
  const navigate = useNavigate()
  //* funkce na posílání dat do store/state(stav)
  const dispatch = useDispatch()

  //* vytažení typu state (stavu) a nastavení, že budeme měnit hodnoty v state
  const { user, isError, isSuccess, message} = useSelector((state)=> state.auth)

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/Dashboard')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])


  const onChange = (e) =>{
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      name,
      password,
    }

    dispatch(login(userData))
  }

  return (
    <Container>
        <Wrapper>
          <form onSubmit={onSubmit}>
            <CenterBox>
                <Text>Uživatelské jméno:</Text>
                <Input
                type='text'
                id='name'
                name='name'
                value={name}
                placeholder='Zadejte uživatelské jméno'
                onChange={onChange}
                />
                <Text>Heslo:</Text>
                <Input
                type='password'
                id='password'
                name='password'
                value={password}
                placeholder='Zadejte heslo'
                onChange={onChange}
                />
                <Button type='submit'>Login</Button>
            </CenterBox>
            </form>
        </Wrapper>
    </Container>
  )
}

export default Login