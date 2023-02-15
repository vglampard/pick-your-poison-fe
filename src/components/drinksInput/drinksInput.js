// import Slider from "@mui/material/Slider";
// import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import React from "react";
import styles from "./drinksInput.css"

export default function DrinksInput({ setNewSession, postNewSession }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (

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

        <input id="submit-btn" type="submit" />
      </form>

  );
}
