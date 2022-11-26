import React, {useEffect} from 'react'
import { ParagraphData } from '../../../data/ParaghData'
import {Container,  Wrapper, Row, Left, LeftContainer, Title, ArticleContainer, ArticleTitle, ArticleDate, ArticleDesc, ArticleButton, ArticleRight, ArticleImg, Right, InfoContainer, InfoTitle, InfoTime, InfoDesc, Paragraph, ArticleLeft,} from './StandartNewsStyled'
import { useSelector, useDispatch } from 'react-redux'
import { getNews } from '../../../features/news/newsSlice'


const StandartNews = () => {
 
  
  const dispatch = useDispatch()

  useEffect(()=>{ dispatch(getNews()) },[dispatch])

  const {news} = useSelector((state) => state.news)

  return (
    <Container>
      <Wrapper>
        <Row>
          <Left>
            <LeftContainer>
              <Title>Novinky</Title>
              {news.map((news)=>(
               <ArticleContainer>
                <ArticleLeft>
                <ArticleTitle>{news.title}</ArticleTitle>
                <ArticleDate>{news.date}</ArticleDate>
                <ArticleDesc>{news.description}</ArticleDesc>
                <ArticleButton>Více</ArticleButton>
                </ArticleLeft>
                <ArticleRight>
                  <ArticleImg/>
                </ArticleRight>
               </ArticleContainer>)).reverse()}
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