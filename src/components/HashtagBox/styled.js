import { Link } from "react-router-dom";
import styled from "styled-components";

export const Box = styled.div`
  height: 406px;
  width: 301px;
  border-radius: 16px;
  background-color: #171717;
  margin-top: 151px;

  @media (max-width:900px){
       display: none;
    }
`;

export const Title = styled.h1`
  font-size: 27px;
  color: #ffffff;
  font-family: "Oswald", sans-serif;
  margin: 20px;
`;

export const Diviser = styled.div`
    width: 100%;
    height: 1px;
    background-color: #484848;
    margin-bottom: 20px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    font-size: 19px;
    margin: 10px 20px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    display: flex;
`