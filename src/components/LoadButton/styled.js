import styled from "styled-components";

export const Button = styled.div`
  height: 61px;
  width: 100%;
  border-radius: 16px;
  background-color: #1877f2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 17px;
  transition: 0.2s all;
  box-shadow: 0px 4px 4px 0px #00000040;
  cursor: pointer;
  text-align: center;


  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #fff;

  :active{
    transform: scale(0.99);
  }
`;
