import React from 'react'
import { Container, Hr, Wrapper, Row, Left, LeftContainer, Title, ArticleContainer, ArticleTitle, ArticleDate, ArticleDesc, ArticleButton, ArticleRight, ArticleImg, Right, InfoContainer, InfoTitle, InfoTime, InfoDesc, Paragraph, ArticleLeft,  } from './BasicStyled'
import { NewsData } from '../../../data/NewsData'
import { ParagraphData } from '../../../data/ParaghData'

const BasicNews = () => {
  return (
    <Container>
      <Hr/>
      <Wrapper>
        <Row>
          <Left>
            <LeftContainer>
              <Title>Novinky</Title>
              {NewsData.map((item)=>(
               <ArticleContainer key={item.id}>
                <ArticleLeft>
                <ArticleTitle>{item.title}</ArticleTitle>
                <ArticleDate>{item.date}</ArticleDate>
                <ArticleDesc>{item.desc}</ArticleDesc>
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

export default BasicNews