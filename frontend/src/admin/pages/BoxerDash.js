import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header'
import BoxerPut from '../components/Dog/Boxer/DogsPut'
import Vycet from '../components/Dog/Boxer/Vycet'
import { getBoxer, reset } from '../../features/boxer/boxerSlice'

const BoxerDash = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { boxer, isError, message} = useSelector(
    (state) => state.boxer
  )

  useEffect(()=>{
    if(isError){
      alert('Chyba')
      console.log(message)
    }
    if(!user){
      navigate('/Login')
    }
    dispatch(getBoxer())

    return ()=>{
      dispatch(reset())
    }
  }, [user, isError, message, dispatch])

  return (
    <div>
      <Header/>
        <BoxerPut/>
        {boxer.length > 0 ? (
          <div>
            {boxer.map((boxer) =>(
              <Vycet key={boxer._id} boxer={boxer} />
            )).reverse()}
          </div>
        ): <>Nic není :/</>}
    </div>
  )
}

export default BoxerDash