import React, {useState, useEffect} from 'react'
import { NewsData } from '../../../data/NewsData'
import { ParagraphData } from '../../../data/ParaghData'
import {Container,  Wrapper, Row, Left, LeftContainer, Title, ArticleContainer, ArticleTitle, ArticleDate, ArticleDesc, ArticleButton, ArticleRight, ArticleImg, Right, InfoContainer, InfoTitle, InfoTime, InfoDesc, Paragraph, ArticleLeft,} from './StandartNewsStyled'
import Axios from 'axios'

const StandartNews = () => {
  const [listofNews, setListofNews] = useState([])

  useEffect(()=>{
    Axios.get("/api/News").then((response)=>{
      setListofNews(response.data);
    })
  },[])

  return (
    <Container>
      <Wrapper>
        <Row>
          <Left>
            <LeftContainer>
              <Title>Novinky</Title>
              {listofNews.map((item)=>(
               <ArticleContainer >
                <ArticleLeft>
                <ArticleTitle>{item.title}</ArticleTitle>
                <ArticleDate>{item.date}</ArticleDate>
                <ArticleDesc>{item.description}</ArticleDesc>
                <ArticleButton>Více</ArticleButton>
                </ArticleLeft>
                <ArticleRight>
                  <ArticleImg/>
                </ArticleRight>
               </ArticleContainer>))}
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