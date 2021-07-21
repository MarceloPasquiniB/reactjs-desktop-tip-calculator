import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "b5 b10 b15"
    "b25 b30 input";
  height: auto;
  width: auto;
  grid-gap: 10px;
  margin: 10px 0;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.veryDark};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.size.regular};
  border-radius: 16px;
  height: 40px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  font-family: ${(props) => props.theme.font};
  padding: 0;

  ;

  &:focus {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.verydark};
  }
`;

export const B5 = styled(Button)`
  grid-area: b5;
`;
export const B10 = styled(Button)`
  grid-area: b10;
`;
export const B15 = styled(Button)`
  grid-area: b15;
`;
export const B25 = styled(Button)`
  grid-area: b25;
`;
export const B30 = styled(Button)`
  grid-area: b30;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.veryDark};
  font-size: ${(props) => props.theme.size.regular};
  border-radius: 16px;
  height: 35px;
  width: 95px;
  grid-area: input;
  text-align: center;
  font-family: ${(props) => props.theme.font};
`;
