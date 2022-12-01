import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: auto;
`
export const Wrapper = styled.div`
display: grid;
z-index: 1;
width: 100%;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`
export const Row = styled.div`
display: grid;
 grid-auto-columns: minmax(auto, 1fr);
 align-items: center;
 grid-template-areas: 'col2 col1';

 @media screen and (max-width: 768px){
    grid-template-areas: 'col1' 'col2';
 }
`

export const ImageContainer = styled.div`
grid-area: col1;
max-width: 100%;
max-height: auto;

` 

export const ProfileImage = styled.img`
object-fit: cover;
max-width: 100%;
max-height: 100%;
margin: 50px;
border-radius: 50px;
`
export const Title = styled.h2`
font-size: 52px;
color: #80c1ff;
`
export const TextWrapper = styled.div`
grid-area: col2;
max-width: 720px;

`

export const DefaultTitle = styled.h4`
font-size: 36px;
color: black;
`

export const Description = styled.p`
font-size: 18px;
font-weight: 400;
text-align: justify;
`