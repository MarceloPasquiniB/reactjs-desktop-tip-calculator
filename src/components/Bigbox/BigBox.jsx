import React from "react";
import DisplayGrid from "../Sides/DisplayGrid/DisplayGrid";
import InputSide from "../Sides/InputSide/InputSide";
import CalcProvider from "../Context/CalcProvider";
import { Box, SmallBox } from "./style";


export default function BigBox() {
  return (
    <CalcProvider>
      <Box>
        <SmallBox>
          <InputSide />
        </SmallBox>
        <SmallBox>
          <DisplayGrid />
        </SmallBox>
      </Box>
    </CalcProvider>
  );
}
