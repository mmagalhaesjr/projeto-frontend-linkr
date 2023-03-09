import styled from "styled-components";

export const Bar = styled.div`
width: 101%;
height: 72px;
background-color: #151515;
display: flex;
justify-content: space-between;
padding: 10px;
box-sizing: border-box;
position: relative;
img{
    width: 53px;
    height: 53px;
    border-radius: 50%;
    margin: 0 15px 0 0;
}
h2{
    text-align: center;
    width: 105px;
    font-family: Lato, sans-serif;
    font-weight: 700;
    font-size: 17px;
    position: absolute;
    top: 65px;
    right: 0;
    padding: 17px;
    border-radius: 0 0 0 14px;
    background-color: #171717;
    color: #ffffff;
    z-index: 3;
    @media(max-width: 900px) {
        font-size: 15px;
    }
}
`;
export const Logo = styled.h1`
color: #ffffff;
font-family: Passion One, sans-serif;
font-weight: 700;
font-size: 49px;
@media(max-width: 900px){
    font-size: 45px;
}
`;
export const LogoutFocus = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
opacity: 0%;
`;