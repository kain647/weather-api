import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { flex, space } from "styled-system";

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    background: linear-gradient(45deg, #EECFBA, #C5DDE8);
    height: 100vh;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans", sans-serif;
    user-select: none;
  }
`;
export const Flex = styled.div`
  display: flex;
  ${space}
`;
export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 250px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ccc;
  padding: 10px;
`;

export const FormContainer = styled.div`
  display: flex;
  padding: 10px;
`;

export const Form = styled(Flex).attrs({})`
  display: flex;
`;
export const Celsius = styled(Flex).attrs({
  mb: 2
})`
  display: flex;
`;
export const City = styled(Flex).attrs({
  mb: 2
})``;

export const Sunrise = styled(Flex).attrs({
  mb: 2
})`
  display: flex;
`;
export const Sunset = styled(Flex).attrs({
  mb: 2
})`
  display: flex;
`;

export const StyledInput = styled.input`
  display: flex;
  outline: none;
  border: none;
  margin-bottom: 10px;
  padding-left: 5px;
  padding: 10px;
`;

export const StyledButton = styled.button`
  display: flex;
  border: none;
  width: 100%;
  padding: 10px;
  outline: none;
  cursor: pointer;
`;
