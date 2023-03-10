import styled from "styled-components";

export const Container = styled.div`
  width: 99vw;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 41px;
  color: #ffffff;
  font-family: "Oswald", sans-serif;
  margin: 75px 0 42px;

`;

export const LeftContent = styled.div`
  width: auto;
  height: auto;
  margin-right: 25px;

  @media (max-width:900px){
       margin: auto;
    }
`;

