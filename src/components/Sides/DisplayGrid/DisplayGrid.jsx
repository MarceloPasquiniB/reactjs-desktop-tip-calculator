import React, { useContext } from "react";
import {
  DisplayNumberTip,
  DisplayNumberTotal,
  Grid,
  SmallTextTip,
  SmallTextTotal,
  ResetButton,
} from "./style";
import { CalcContext } from "../../Context/CalcProvider";

export default function DisplayGrid() {
  const { bill, people, tip, setBill, setPeople, setTip } =
    useContext(CalcContext);

  const billPerson = bill / people;
  const tipPerson = (bill * tip) / 100 / people;
  const totalPerson = billPerson + tipPerson;
  function isNumeric(props) {
    if (props <= 0 || isNaN(props)) {
      return " 0.0";
    } else if (!isFinite(props)) {
      return " 0.0";
    } else if (props > 99999) {
      return "rly that expensive?";
    } else {
      return parseFloat(props).toFixed(2);
    }
  }

  function reset() {
    setBill(0);
    setTip(0);
    setPeople(0);
  }

  return (
    <Grid>
      <SmallTextTip>Tip Amount / Person</SmallTextTip>
      <SmallTextTotal>Total / Person</SmallTextTotal>
      <DisplayNumberTip>{"$" + isNumeric(tipPerson)}</DisplayNumberTip>
      <DisplayNumberTotal>{"$" + isNumeric(totalPerson)}</DisplayNumberTotal>
      <ResetButton onClick={reset}>RESET</ResetButton>
    </Grid>
  );
}
