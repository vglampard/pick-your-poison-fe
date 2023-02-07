import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { useState } from "react";
import React from "react";
import { Paper } from "@mui/material";

export default function DrinksInput() {
  const [headacheState, setHeadacheState] = useState(5);
  const [nauseaState, setNauseaState] = useState(5);
  const [fatigueState, setFatigueState] = useState(5);
  const [wineState, setWineState] = useState(0);
  const [beerState, setBeerState] = useState(0);
  const [ciderState, setCiderState] = useState(0);
  const [spiritState, setSpiritState] = useState(0);
  const [alcopopState, setAlcopopState] = useState(0);

  function handleClick() {
    console.log(
      "final results:",
      nauseaState,
      headacheState,
      fatigueState,
      wineState,
      beerState,
      spiritState,
      alcopopState,
      ciderState
    );
  }
  function changeNauseaValue(event, value) {
    setNauseaState(value);
    console.log(nauseaState);
  }
  function changeHeadacheValue(event, value) {
    setHeadacheState(value);
    console.log(headacheState);
  }
  function changeFatigueValue(event, value) {
    setFatigueState(value);
    console.log(fatigueState);
  }

  function handleWineChange(event) {
    setWineState(event.target.value);
    console.log(wineState);
  }
  function handleBeerChange(event) {
    setWineState(event.target.value);
  }
  function handleCiderChange(event) {
    setWineState(event.target.value);
  }
  function handleSpiritChange(event) {
    setWineState(event.target.value);
  }
  function handleAlcopopChange(event) {
    setWineState(event.target.value);
  }

  return (
    <Paper>
      <label for="wine">Wine?</label>
      <input
        type="text"
        id="wine"
        name="wine"
        onChange={handleWineChange}
      ></input>

      <label for="beer">Beer?</label>
      <input
        type="text"
        id="beer"
        name="beer"
        onChange={handleBeerChange}
      ></input>

      <label for="cider">Cider?</label>
      <input
        type="text"
        id="cider"
        name="cider"
        onChange={handleCiderChange}
      ></input>

      <label for="spirit">Spirits?</label>
      <input
        type="text"
        id="spirit"
        name="spirit"
        onChange={handleSpiritChange}
      ></input>

      <label for="alcopop">Alcopop?</label>
      <input
        type="text"
        id="alcopop"
        name="alcopop"
        onChange={handleAlcopopChange}
      ></input>

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
      <Button variant="contained" onClick={handleClick}>
        Log drinks
      </Button>
    </Paper>
  );
}
