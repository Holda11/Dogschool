import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import DobrmanPut from '../components/Dog/Dobrman/DobrmanPut'
import DobrmanVycet from '../components/Dog/Dobrman/DobrmanVycet'
import { getDobrman, reset } from '../../features/dobrman/dobrmanSlice'
import Header from '../components/Header'

const DobrmanDash = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { dobrman, isError, message} = useSelector(
    (state) => state.dobrman
  )

  useEffect(()=>{
    if(isError){
      console.log(message)
    }
    if(!user){
      navigate('/Login')
    }
    dispatch(getDobrman())

    return ()=>{
      dispatch(reset())
    }
  }, [user, isError, message, dispatch])

  return (
    <div>
      <Header/>
        <DobrmanPut/>
        {dobrman.length > 0 ? (
          <div>
            {dobrman.map((dobrman) =>(
              <DobrmanVycet key={dobrman._id} dobrman={dobrman} />
            )).reverse()}
          </div>
        ): <>Nic není :/</>}
    </div>
  )
}

export default DobrmanDash