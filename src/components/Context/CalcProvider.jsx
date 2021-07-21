import React, { createContext, useEffect, useState } from "react";

export const CalcContext = createContext();
export default function CalcProvider({ children }) {
  const billInitial = 0
  const tipInitial = 0
  const peopleInitial =1
  
  const [bill, setBill] = useState(billInitial);
  const [tip, setTip] = useState(tipInitial);
  const [people, setPeople] = useState(peopleInitial);

  useEffect(() => {
    console.log(bill)
    console.log(tip)
    console.log(people)
   });

  return (
    <CalcContext.Provider
      value={{ bill, setBill, tip, setTip, people, setPeople }}
    >
      {children}
    </CalcContext.Provider>
  );
}
