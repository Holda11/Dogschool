import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getNews } from '../../../features/news/newsSlice'

const ProfileNews = () => {
    const dispatch = useDispatch()
    const { title } = useParams()
    const { news } = useSelector( (state) => state.news)
    useEffect(()=>{dispatch(getNews())}, [dispatch])

  return (
    <div>
        {news.map((news)=>{ 
            if(news.title === title)
            return (
            <h1>{news.title}</h1>
        )})}
    </div>
  )
}

export default ProfileNews