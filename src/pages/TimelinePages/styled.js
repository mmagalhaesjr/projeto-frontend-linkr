import styled from "styled-components";


export const StyledMain = styled.main`
 display: flex;
 justify-content: center;
`;


export const Container = styled.div`
  width: 99vw;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  margin-right: 25px;
  width: 611px;
  flex-direction: column;
 
  h1 {
    font-size: 41px;
    color: #ffffff;
    font-family: "Oswald", sans-serif;
    margin-top: 78px;
  }
  @media (max-width:900px){
       margin: auto;
    }
`;
