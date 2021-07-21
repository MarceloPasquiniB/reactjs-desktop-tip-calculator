import React, {useContext} from "react";
import { Grid, B5, B10, B15, B25, B30, Input } from "./style";
import {CalcContext} from "../../../Context/CalcProvider"



export default function ButtonsGrid() {
  const {tip, setTip} = useContext(CalcContext)

  const percentTip = (event) => {
    setTip(event.target.value)
  }

  const customTip = (event) => {
    setTip(event.target.value)
  }

  return (
    <Grid>
      <B5 value={5} onClick={percentTip}>5%</B5>
      <B10 value={10} onClick={percentTip}>10%</B10>
      <B15 value={15} onClick={percentTip}>15%</B15>
      <B25 value={25} onClick={percentTip}>25%</B25>
      <B30 value={30} onClick={percentTip}>30%</B30>
      <Input value={tip} onChange={customTip} type="number" placeholder="?%"></Input>
    </Grid>
  );
}
