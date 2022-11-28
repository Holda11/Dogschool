import styled from "styled-components";

export const Container = styled.div`
margin-top: 50px;
width: 100%;
min-height: 50vh;
`
export const Wrapper = styled.div`
max-width: 100%;
display: grid;
grid-template-rows: minmax(1fr, 1fr, 1fr, auto);
gap: 20px;
grid-row: auto;
justify-content: center;
align-items: center;
`
export const Box = styled.div`
width:  200px;
height: 450px;
background-color: white;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Title = styled.h4`
font-size: 18px;
color: black
`
