import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: "Space Mono", monospace;
  background-color: ${(props) => props.theme.colors.light};
`;

export const Title = styled.h1`
  font-weight: bold;
  color: ${(props) => props.theme.colors.veryDark};
  font-size: ${(props) => props.theme.size.regular};
  margin: 5px;

  :nth-child(2){
    color: ${(props) => props.theme.colors.white};
  }
`;
