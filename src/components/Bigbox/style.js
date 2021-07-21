import styled from "styled-components";



export const Box = styled.div`
  display: flex;
  background-color: white;
  width: 800px;
  height: 425px;
  border-radius: 16px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-around;

`;

export const SmallBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px;
  width: 40%;
  height: 75%;
  border-radius: 16px;

  &:last-child {
    background-color: ${(props) => props.theme.colors.veryDark};
  }
`;