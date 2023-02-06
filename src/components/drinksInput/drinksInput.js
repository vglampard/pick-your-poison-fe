import Slider from "@mui/material/Slider";
import Button from '@mui/material/Button';
import { useState } from "react";

import React from "react";

export default function DrinksInput() {
const [headachState, setHeadacheState] = useState(5)
function handleClick(){

}

  return (
    <div>
        <p>Nausea?</p>
      <Slider
        aria-label="nausea"
        className="slider"
        defaultValue={5}
        valueLabelDisplay="auto"
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
        step={1}
        marks
        min={0}
        max={10}
      />
  <Button variant="contained" onClick={handleClick}>Log drinks</Button>
    </div>
  );
}
