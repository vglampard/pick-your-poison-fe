// import Slider from "@mui/material/Slider";
// import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import React from "react";
import { Paper } from "@mui/material";
import styles from "./drinksInput.css"

export default function DrinksInput({ setNewSessionState, postNewSession }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <Paper elevation = {20}>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          postNewSession(data);
        })}
      >

<label for="date">Date:</label>
<input type="date" id="date" name="date" {...register("date", { required: "date is required" })}/>
        <label for="wine">Wine?</label>
        <input
          type="text"
          id="wine"
          name="wine"
          {...register("wine", { required: "Wine amount is required" })}
        />
        <p>{errors.wine?.message}</p>

        <label for="beer">Beer?</label>
        <input
          type="text"
          id="beer"
          name="beer"
          {...register("beer", { required: "Beer is required" })}
        />
        <p>{errors.beer?.message}</p>
        <label for="cider">Cider?</label>
        <input
          type="text"
          id="cider"
          name="cider"
          {...register("cider", { required: "cider is required" })}
        />
        <p>{errors.beer?.message}</p>

        <label for="spirit">Spirits?</label>
        <input
          type="text"
          id="spirit"
          name="spirit"
          {...register("spirit", { required: "spirit is required" })}
        />
        <p>{errors.spirit?.message}</p>
        <label for="alcopop">Alcopop?</label>
        <input
          type="text"
          id="alcopop"
          name="alcopop"
          {...register("alcopop", { required: "alcopop is required" })}
        />
        <p>{errors.alcopop?.message}</p>

        <label for="nausea">Nausea?</label>
        <input
          type="range"
          id="nausea"
          name="nausea"
          min= "0"
          max = "10"
          className = "slider"
          {...register("nausea", { required: "Nausea is required" })}
        />
         <label for="headache">Headache?</label>
        <input
          type="range"
          id="headache"
          name="headache"
          min= "0"
          max = "10"
          className = "slider"
          {...register("headache", { required: "Headache is required" })}
        />
         <label for="fatigue">Fatigue?</label>
        <input
          type="range"
          id="fatigue"
          name="fatigue"
          min= "0"
          max = "10"
          className = "slider"
          {...register("fatigue", { required: "Fatigue is required" })}
        />

        {/* <p>Nausea?</p> */}

        {/* <Slider
          aria-label="nausea"
          className="slider"
          defaultValue={5}
          valueLabelDisplay="auto"
          value={nauseaState}
          {...register("nausea", { required: "nausea is required" })}
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
        /> */}
        {/* <Button variant="contained" onClick={handleClick}>
          Log drinks
        </Button> */}
        <input id="submit-btn" type="submit" />
      </form>
    </Paper>
  );
}
