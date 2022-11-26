import styled from "styled-components";


export const Container = styled.div`
margin-top: 80px;
width: 100%;
height: 50vh;
`
export const Wrapper = styled.div`
display: grid;
grid-template-rows: minmax(1fr, auto);
grid-template-areas: 'grid1 grid2 grid3';
justify-content: space-evenly;
align-items: center;


@media screen and (width: 1280px){
    grid-template-areas: 'grid1' 'grid2' 'grid3';
}
`
export const Boxer = styled.div`
grid-area: grid1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 300px;
height: 500px;
border: 1px solid none;
border-radius: 15px;
background-color: rgba(245, 183, 39, 0.91);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const Dobrman = styled.div`
grid-area: grid2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 300px;
height: 500px;
border: 1px solid none;
border-radius: 15px;
background-color: rgba(255, 255, 255, 0);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const Ovcak = styled.div`
grid-area: grid3;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 300px;
height: 500px;
border: 1px solid none;
border-radius: 15px;
background-color: rgba(37, 169, 227, 1);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const Title = styled.h4`
color: black;
font-size: 24px;
margin: 10px 0;
z-index: 1;
`
export const Button = styled.button`
color:white;
background-color: black;
font-size: 18px;
border: 1px solid none;
border-radius: 25px;
z-index: 1;
padding: 6px 10px;
`