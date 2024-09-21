import styled from "styled-components";

export const PagenationBox = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 300px;
  text-align: center;
`
export const PageButton = styled.button`
  margin: 0 5px;
  width: 30px;
  height: 30px;
  font-size: 20px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const CurrentPageButton = styled.button`
  margin: 0 5px;
  width: 30px;
  height: 30px;
  font-size: 20px;
  color: white;
  border-radius: 50%;
  background-color: black;
`;