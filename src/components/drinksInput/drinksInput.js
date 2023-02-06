import Slider from "@mui/material/Slider";
import Button from '@mui/material/Button';
import { useState } from "react";

import React from "react";

export default function DrinksInput() {

const [headacheState, setHeadacheState] = useState(5);
const [nauseaState, setNauseaState] = useState(5)
const [fatigueState, setFatigueState] = useState(5)

function handleClick(){
console.log("final results:", nauseaState, headacheState, fatigueState)
}

function changeNauseaValue(event, value){
setNauseaState(value)
console.log(nauseaState)
}

function changeHeadacheValue(event, value){
    setHeadacheState(value)
    console.log(headacheState)
    }

    function changeFatigueValue(event, value){
        setFatigueState(value)
        console.log(fatigueState)
        }
    

  return (
    <div>
        <p>Nausea?</p>
      <Slider
        aria-label="nausea"
        className="slider"
        defaultValue={5}
        valueLabelDisplay="auto"
        value={nauseaState}
        onChange={changeNauseaValue}
        step={1}
        marks
        min={0}
        max={10}
      />
      <p>Headache?</p>
      <Slider
        aria-label="headache"
        className="slider"
        defaultValue={5}
        valueLabelDisplay="auto"
        value={headacheState}
        onChange={changeHeadacheValue}
        step={1}
        marks
        min={0}
        max={10}
      />
      <p>Fatigue?</p>
      <Slider
        aria-label="fatigue"
        className="slider"
        defaultValue={5}
        valueLabelDisplay="auto"
        value={fatigueState}
        onChange={changeFatigueValue}
        step={1}
        marks
        min={0}
        max={10}
      />
  <Button variant="contained" onClick={handleClick}>Log drinks</Button>
    </div>
  );
}
