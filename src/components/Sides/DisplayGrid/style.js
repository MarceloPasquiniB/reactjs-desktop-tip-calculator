import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "tip numberTip"
    "total numberTotal"
    "button button";
  height: 85%;
  width: 85%;
  grid-gap: 10px;
  place-self: center;

`;

export const SmallTextTip = styled.p`
  font-size: ${(props) => props.theme.size.small};
  color: ${(props) => props.theme.colors.white};
  place-self: center;
  grid-area: tip;
`;

export const SmallTextTotal = styled.p`
  font-size: ${(props) => props.theme.size.small};
  color: ${(props) => props.theme.colors.white};
  place-self: center;
  grid-area: total;
`;

export const DisplayNumberTip = styled.p`
  font-size: ${(props) => props.theme.size.large};
  color: ${(props) => props.theme.colors.light};
  place-self: center stretch;
  justify-items: end;
  grid-area: numberTip;
`;

export const DisplayNumberTotal = styled.p`
  font-size: ${(props) => props.theme.size.large};
  color: ${(props) => props.theme.colors.light};
  place-self: center;
  grid-area: numberTotal;
`;

export const ResetButton = styled.button`
  background-color: ${(props) => props.theme.colors.light};
  font-size: ${(props) => props.theme.size.small};
  border-radius: 16px;
  width: 100%;
  height: 50%;
  grid-area: button;
  align-items: end;
  font-family: ${(props) => props.theme.font};
`;
