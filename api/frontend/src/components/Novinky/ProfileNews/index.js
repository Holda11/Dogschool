import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getNews } from '../../../features/news/newsSlice'
import { Article, Container, Date, Description, ImageContainer, Img, Info, TextWrapper, Title } from './ProfileNewsStyled'

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
        <Container>
          <Article>
            <Title>{news.title}</Title>
            <Date>{news.date}</Date>
            <ImageContainer>
              <Img src={require(`../../../images/`+ news.image)}/>
            </ImageContainer>
            <TextWrapper>
            <Description>
              {news.description}
            </Description>
            </TextWrapper>
          </Article>
          <Info></Info>
        </Container>
          )})}
    </div>
  )
}

export default ProfileNews