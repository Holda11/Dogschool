import styled from "styled-components";

export const Navbar = styled.nav`
border-bottom: 1px solid grey;
color: white;
background-color: black;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
font-size: 24px;
font-weight: bold;
padding: 10px 0;
`

export const Container = styled.div`
width: 100%;
height: 100vh;
`
export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
min-height: 100vh;
`
export const CenterDiv = styled.div`
display: grid;
grid-template-rows: minmax(auto);
align-items: center;
grid-template-areas: 'grid1 grid2 grid3';
`
export const Psy = styled.div`
grid-area: grid1;
width: 250px;
height: 400px;
background-color: white;
border: 1px solid none;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius: 10px;
padding: 10px;
margin: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Novinky = styled.div`
grid-area: grid2;
width: 250px;
height: 400px;
background-color: #ffd699;
border: 1px solid none;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius: 10px;
padding: 10px;
margin: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Info = styled.div`
grid-area: grid3;
width: 250px;
height: 400px;
background-color: #cce6ff;
border: 1px solid none;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius: 10px;
padding: 10px;
margin: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Title = styled.h4`
font-size: 36px;
font-weight: 700;
`
export const Button = styled.button`
color: white;
padding: 5px 10px;
background-color: black;
border-radius: 5px;
font-size: 16px;
transition: 1s ease;

&:hover{
    transform: scale(1.1);
}
`