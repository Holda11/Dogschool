import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import VycetPsu from '../components/Dog/Ratata/Vycet'
import Header from '../components/Header'
import DogsPut from '../components/Dog/Ratata/DogsPut'
import { getDogs, reset } from '../../features/dogs/dogsSlice'

const PsyDash = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { dogs, isError, message} = useSelector(
    (state) => state.dogs
  )

  useEffect(()=>{
    if(isError){
      console.log(message)
    }
    if(!user){
      navigate('/Login')
    }
    dispatch(getDogs())

    return ()=>{
      dispatch(reset())
    }
  }, [user, isError, message, navigate ,dispatch])

  return (
    <div>
      <Header/>
        <DogsPut/>
        {dogs.length > 0 ? (
          <div>
            {dogs.map((dogs) =>(
              <VycetPsu key={dogs._id} dogs={dogs} />
            )).reverse()}
          </div>
        ): <>Nic není :/</>}
    </div>
  )
}

export default PsyDash