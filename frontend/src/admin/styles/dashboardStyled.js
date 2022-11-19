import styled from "styled-components";

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