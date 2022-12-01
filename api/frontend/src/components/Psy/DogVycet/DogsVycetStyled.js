import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
margin-top: 50px;
max-width: 100%;
min-height: 50vh;
justify-content: center;
align-items: center;
display: flex;
`
export const Wrapper = styled.div`
max-width: 100%;
display: grid;
grid-template-columns: auto auto auto auto;
gap: 30px;

@media screen and (max-width: 720px) {
    display: grid;
grid-template-columns: auto;
}

`
export const Box = styled.div`
width:  350px;
height: 350px;

border-radius: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const ImageContainer = styled.div`
max-width: 350px;
max-height: 350px;
position: relative;
background-color: #80c1ff;
border-radius: 50px;
`
export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: fill;
border-radius: 50px;
opacity: 20%;
filter: blur(8px);
  -webkit-filter: blur(8px);
` 
export const Group = styled.div`
position: absolute;
max-width: 100%;
bottom: 25px;
left: 15px ;
`

export const Title = styled.h4`
font-size: 36px;
color: #fff;
margin-bottom: 5px;

`
export const LinkDog = styled(Link)`
color: #fff;
text-decoration: none;
padding: 4px 16px;
background-color: black;
border-radius: 50px;
`