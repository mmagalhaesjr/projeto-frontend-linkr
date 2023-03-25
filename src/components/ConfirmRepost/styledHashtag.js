import styled from "styled-components";

export const WhiteScreen = styled.div`
width: 100vw;
height: 100vh;
background-color: rgba(255, 255, 255, 0.9);
position: fixed;
top: 0;
left: 0;
z-index: 4;
`;
export const ConfirmBox = styled.div`
background-color: #333333;
width: 597px;
height: 210px;
border-radius: 20px;
text-align: center;
margin: 300px auto;
font-family: Lato, sans-serif;
padding: 5px;
@media(max-width: 900px){
    width: 450px;
    min-width: 60%;
    width: fit-content;
    height: 170px;
}
`;
export const NoBox = styled.button`
width: 134px; 
height: 37px;
h2{
    border-radius: 5px;
    padding: 8px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    color: #1877F2;
}
`;
export const YesBox = styled.button`
width: 134px; 
height: 37px;
h2{
    border-radius: 5px;
    padding: 8px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #1877F2;
    color: #ffffff;
}
`;
export const Options = styled.div`
width: 60%;
margin: 0 auto;
display: flex;
justify-content: space-evenly;
@media(max-width: 900px){
    justify-content: space-around;
}
button{
    border: none;
    @media(max-width: 900px){
    font-size: 12px;
    width: 100px;
    height: 30px;
    margin: 0 10px 0 10px;
}
}
h2{
    font-family: Lato, sans-serif;
    font-weight: 700;
    font-size: 18px;
    @media(max-width: 900px){
    font-size: 12px;
    width: 100px;
    height: 30px;
}
}
`;
export const Question = styled.div`
margin: 37px auto;
width: 60%;
h1{

    font-family: Lato, sans-serif;
    font-weight: 700;
    font-size: 29px;
    @media(max-width: 900px){
    font-size: 18px;
}
}
`;