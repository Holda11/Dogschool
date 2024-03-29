import React, { useEffect, useState } from 'react'
import { Container, Hr, Wrapper, Row, Left, LeftContainer, Title, ArticleContainer, ArticleTitle, ArticleDate, ArticleDesc, ArticleButton, ArticleRight, ArticleImg, Right, InfoContainer, InfoTitle, InfoTime, InfoDesc, Paragraph, ArticleLeft, LinkArticle,  } from './BasicStyled'
import { ParagraphData } from '../../../data/ParaghData'
import { useSelector, useDispatch } from 'react-redux'
import { getNews } from '../../../features/news/newsSlice'


const BasicNews = () => {
  const dispatch = useDispatch()
  const { news } = useSelector((state) => state.news)

  

  
 
  useEffect(()=>{ dispatch(getNews()) }, [dispatch])

  return (
    <Container>
      <Hr/>
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
                <ArticleDesc>{news.description.slice('', 50)}</ArticleDesc>
                <LinkArticle to={`/Novinky/${news.title}`}>Více</LinkArticle>
                </ArticleLeft>
                <ArticleRight>
                  <ArticleImg />
                </ArticleRight>
               </ArticleContainer>)).reverse().slice(0,3)}
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

export default BasicNews