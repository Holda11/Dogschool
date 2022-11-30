import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
min-height: 100vh;
background-color: #E0E0E0;
`
export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const CenterBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: left;
background-color: white;
width: 400px;
height: 400px;
border: 1px solid gray;
border-radius: 15px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const Text = styled.p`
font-size: 16px;
font-weight: 700;
`
export const Input = styled.input`
padding: 5px;
border: 2px solid black;
`
export const Button = styled.button`
margin-top: 10px;
padding: 5px 10px;
background-color: black;
color: white;
border-radius: 15px;
transition: 3ms ease-in-out;

&:hover{
    background-color: white;
    color: black; 
    transition: 1s ease-in-out;
}
`