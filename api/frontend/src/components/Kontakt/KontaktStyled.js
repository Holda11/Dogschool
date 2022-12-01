import styled from "styled-components";

export const MarginLeft = styled.div`
margin-left: 5px ;
`

export const Container = styled.div`
width: 100%;
@media screen and (max-width: 768px){
 padding: 100px 0;
 

}
@media screen and (max-width: 1024px) {
    height: 1300px;
}
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
 justify-content: center;
 grid-template-areas: 'col2 col1';
 margin-top: 10px;

 @media screen and (max-width: 768px){
    grid-template-areas: 'col1 col1' 'col2 col2';
 }
`
export const Left = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;

`
export const Title = styled.h3`
margin-left: 24px;
font-size: 32px;

`


export const HeaderTitle = styled.h2`
display: flex;
align-items: center;
justify-content: center;
`
export const Ul = styled.ul`
list-style: none;
display: flex;
gap: 15px;
flex-direction: column;

`
export const Li = styled.li`
margin-top: 12px;
display: flex;
flex-direction: row;
align-items: center;
font-weight: 500;
`
export const Right = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const ImageContainer = styled.div`
width: 100%;
max-height: 450px;
margin: 0 0 10px 0;
padding-right: 0 ;
border-radius: 15px;
position: relative;

`
export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: fill;
border-radius: 50px;
`
export const ImgText = styled.p`
position: absolute;
width: 300px;
bottom: -35%;
left: 30%;
font-size: 48px;
z-index: 2;
font-weight: 600;
background-color: #ffd699;
padding: 10px;
`
export const SocialUl = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
border-top: 1px solid grey;
`
export const SocialLi = styled.li`
padding: 10px;
margin-right: 12px;
`