import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: auto;
margin-top: 10px;
background-color: #fff;
padding: 24px 0;
`
export const Hr = styled.div`
height: 1px;
width: 100%;
border-bottom: 1px solid grey;
`

export const Wrapper = styled.div`
display: grid;
z-index: 1;
max-width: 1200px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;

`

export const Row = styled.div`
 display: grid;
 grid-auto-columns: minmax(auto, 1fr);
 align-items: center;
 grid-template-areas: 'col1 col2';

`

export const Left = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const LeftContainer = styled.div`
max-width: 700px;
z-index: 1;
align-items: center;
`
export const Title = styled.h3`
font-size: 52px;
font-weight: 700;
`
export const ArticleContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-bottom: 1px solid grey;
border-top: 1px solid grey;
`
export const ArticleLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
max-width: 500px;
`
export const ArticleTitle = styled.h3`
font-size: 32px;
font-weight: 800;
color: blue;
`
export const ArticleDate = styled.p`
font-size: 12px;
font-weight: 300;
color: black;
margin-top: -30px;
`
export const ArticleDesc = styled.p`
margin-top: 10px;
font-size: 16px;
text-align: justify;
max-width: 400px;
max-height: 250px ;
`
export const ArticleButton = styled.button`
padding: 10px 12px;
color:white;
border: 1px solid black;
border-radius: 15px;
background-color: black;
width: fit-content;
margin: 10px 0;
`
export const ArticleRight = styled.div`
max-width: 150px;
max-height: 150px;
`
export const ArticleImg = styled.img`
max-width: 150px;
height: auto;
`
export const Right = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`
export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;

`
export const Paragraph = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: left;

`
export const InfoTitle = styled.h3`
color: black;
font-size: 24px;
font-weight: 800;

`
export const InfoTime = styled.p`
color: black;
font-size: 16px;
font-weight: 200;
margin-top: -10px;
`
export const InfoDesc = styled.p`
color: black;
font-size: 12px;
`
export const LinkArticle = styled(Link)`
color: #fff;
display: flex;
text-decoration: none;
align-items: center;
justify-content: center;
width: 58px;
height: 28px;
text-align: center;
background-color: black;
border-radius: 25px;
margin: 24px;
`