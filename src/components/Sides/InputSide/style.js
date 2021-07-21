import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.size.small};
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.font};
`;

export const Input = styled.input`
background-color: ${(props) => props.theme.colors.light};
color: ${(props) => props.theme.colors.veryDark};
font-size: ${(props) => props.theme.size.regular};
text-align: right;
width: 100%;
font-family: ${(props) => props.theme.font};
height: 2rem;
border-radius: 16px;
`;