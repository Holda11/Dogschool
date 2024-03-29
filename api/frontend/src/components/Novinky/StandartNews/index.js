import React, {useEffect, useState} from 'react'
import { ParagraphData } from '../../../data/ParaghData'
import {Container,  Wrapper, Row, Left, LeftContainer, Title, ArticleContainer, ArticleTitle, ArticleDate, ArticleDesc, ArticleButton, ArticleRight, ArticleImg, Right, InfoContainer, InfoTitle, InfoTime, InfoDesc, Paragraph, ArticleLeft, LinkArticle,} from './StandartNewsStyled'
import { useSelector, useDispatch } from 'react-redux'
import { getNews } from '../../../features/news/newsSlice'
import { Link } from 'react-router-dom'


const StandartNews = () => {
  const [visible, setVisible] = useState(3)
  const dispatch = useDispatch()

  useEffect(()=>{ dispatch(getNews()) },[dispatch])

  const {news} = useSelector((state) => state.news)

  const showMore = () =>{
    setVisible((prevValue) => prevValue + 3)
  }

  return (
    <Container>
      <Wrapper>
        <Row>
          <Left>
            <LeftContainer>
              <Title>Novinky</Title>
              {news.map((news)=>(
               <ArticleContainer key={news.id}>
                <ArticleLeft>
                <ArticleTitle>{news.title}</ArticleTitle>
                <ArticleDate>{news.date}</ArticleDate>
                <ArticleDesc>{news.description}</ArticleDesc>
                <LinkArticle to={`/Novinky/${news.title}`}>Více</LinkArticle>
                </ArticleLeft>
                <ArticleRight>
                </ArticleRight>
               </ArticleContainer>)).reverse().slice(0, visible)}
               <button onClick={showMore}>Více</button>
            </LeftContainer>
          </Left>
          <Right>
            <InfoContainer>
              {ParagraphData.map((item)=>(
              <Paragraph key={item.id}>
                <InfoTitle>{item.title}</InfoTitle>
                <InfoTime>{item.date}</InfoTime>
                <InfoDesc>{item.desc}</InfoDesc>
              </Paragraph>))}
            </InfoContainer>
          </Right>
        </Row>
      </Wrapper>
      
    </Container>

  )
}

export default StandartNews