import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export default function DrinksInput() {
  const [headacheState, setHeadacheState] = useState(5);
  const [nauseaState, setNauseaState] = useState(5);
  const [fatigueState, setFatigueState] = useState(5);
  const {
    register,
    handlSubmit,
    formState: { errors },
  } = useForm({});

  function handleClick() {
    console.log("final results:", nauseaState, headacheState, fatigueState);
  }

function handleSubmit(data, e){
    e.preventDefault();
    console.log("DATA:", data)
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

  function handleWineChange() {}

  return (
    <div>

<form
			aria-label="Add new resource"
			className="form"
			onSubmit={handleSubmit}
		>
            <select
						{...register("wine", { required: "Wine amount is required" })} aria-label = "wine-amount-dropdown"
					>
						<option value="">Wine</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
                    <select
						{...register("cider", { required: "Cider amount is required" })} aria-label = "Cider-amount-dropdown"
					>
						<option value="">Cider</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
                    <select
						{...register("spirit", { required: "Spirit amount is required" })} aria-label = "Spirit-amount-dropdown"
					>
						<option value="">Spirit</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
                    <select
						{...register("beer", { required: "Beer amount is required" })} aria-label = "Beer-amount-dropdown"
					>
						<option value="">Beer</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
                    <select
						{...register("alcopop", { required: "Alcopop amount is required" })} aria-label = "Alcopop-amount-dropdown"
					>
						<option value="">Alcopop</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>

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
        {...register("nausea", { required: "Nausea score is required" })}
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
      <input id="submit-btn" type="submit" />
</form>


      
    </div>
  );
}

