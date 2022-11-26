import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NewsPut from '../components/News/NewsPut'
import Vycet from '../components/News/Vycet'
import { getNews, reset } from '../../features/news/newsSlice'
import Header from '../components/Header'

const NovinkyDash = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { news, isError, message} = useSelector(
    (state) => state.news
  )

  useEffect(()=>{
    if(isError){
      alert('Chyba')
      console.log(message)
    }
    if(!user){
      navigate('/Login')
    }
    dispatch(getNews())

    return ()=>{
      dispatch(reset())
    }
  }, [user, isError, message, dispatch])

  return (
    <div>
      <Header/>
        <NewsPut/>
        {news.length > 0 ? (
          <div>
            {news.map((news) =>(
              <Vycet key={news._id} news={news} />
            )).reverse()}
          </div>
        ): <>Nic není :/</>}
    </div>
  )
}

export default NovinkyDash