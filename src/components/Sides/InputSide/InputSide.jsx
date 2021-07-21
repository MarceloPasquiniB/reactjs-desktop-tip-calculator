import React, { useContext } from 'react';
import { Wrapper, Title, Input } from './style';
import ButtonsGrid from './ButtonsGrid/ButtonsGrid';
import { CalcContext } from '../../Context/CalcProvider';


export default function InputSide(){
    const {bill, people, setBill, setPeople} = useContext(CalcContext)
    return(
        <Wrapper>
            <Title>Bill</Title>
            <Input value={bill} onChange={(e) =>{setBill(e.target.value)}} type="number"></Input>
            <Title>Select Tip %</Title>
            <ButtonsGrid></ButtonsGrid>
            <Title>Number of People</Title>
            <Input onChange={(e) =>{setPeople(e.target.value)}} value={people} type="number"></Input>
        </Wrapper>
    )
};