// import Slider from "@mui/material/Slider";
// import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import React from "react";

export default function DrinksInput({ postNewSession, setSeeInput }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          postNewSession(data);
        })}
        className="bg-slate-100 bg-opacity-80 uppercase gap-2 text-sm m-5 flex flex-col p-5 pt-2 rounded "
      >
        <div className="w-full flex justify-end">
        <button onClick={()=>setSeeInput(false)} className="pl-30">X</button>
        </div>
        <div className="flex justify-center gap-2">
          <label for="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            {...register("date", { required: "date is required" })}
          />
        </div>
        <div className="flex flex-col bg-slate-50 p-2 rounded">
          <h1>Units consumed of...</h1>
          <div className="flex justify-center gap-2">
            <label for="wine">Wine?</label>
            <input
              type="text"
              id="wine"
              name="wine"
              className="focus:outline rounded border-b-2 bg-slate-50 outline-2  bg-opacity-50 w-[40px]"
              {...register("wine", { required: "Wine amount is required" })}
            />
            <p>{errors.wine?.message}</p>
          </div>
          <div className="flex justify-center gap-2">
            <label for="beer">Beer?</label>
            <input
              type="text"
              id="beer"
              name="beer"
              className="focus:outline rounded border-b-2 bg-slate-50 outline-2  bg-opacity-50 w-[40px]"
              {...register("beer", { required: "Beer is required" })}
            />
            <p>{errors.beer?.message}</p>
          </div>
          <div className="flex justify-center gap-2">
            <label for="cider">Cider?</label>
            <input
              className="focus:outline rounded border-b-2 bg-slate-50 outline-2  bg-opacity-50 w-[40px]"
              type="text"
              id="cider"
              name="cider"
              {...register("cider", { required: "cider is required" })}
            />
            <p>{errors.beer?.message}</p>
          </div>
          <div className="flex justify-center gap-2">
            <label for="spirit">Spirits?</label>
            <input
              className="focus:outline rounded border-b-2 bg-slate-50 outline-2  bg-opacity-50 w-[40px]"
              type="text"
              id="spirit"
              name="spirit"
              {...register("spirit", { required: "spirit is required" })}
            />
            <p>{errors.spirit?.message}</p>
          </div>
          <div className="flex justify-center gap-2">
            <label for="alcopop">Alcopop?</label>
            <input
              className="focus:outline rounded border-b-2 bg-slate-50 outline-2  bg-opacity-50 w-[40px]"
              type="text"
              id="alcopop"
              name="alcopop"
              {...register("alcopop", { required: "alcopop is required" })}
            />
            <p>{errors.alcopop?.message}</p>
          </div>
        </div>
        <div className="flex flex-col bg-slate-50 p-2 rounded">
          <p>Hangover levels of...</p>
          <label for="nausea">Nausea?</label>
          <input
            type="range"
            id="nausea"
            name="nausea"
            min="0"
            max="10"
            className="slider"
            {...register("nausea", { required: "Nausea is required" })}
          />
          <label for="headache">Headache?</label>
          <input
            type="range"
            id="headache"
            name="headache"
            min="0"
            max="10"
            className="slider"
            {...register("headache", { required: "Headache is required" })}
          />
          <label for="fatigue">Fatigue?</label>
          <input
            type="range"
            id="fatigue"
            name="fatigue"
            min="0"
            max="10"
            className="slider"
            {...register("fatigue", { required: "Fatigue is required" })}
          />
        </div>
        <input
          id="submit-btn"
          type="submit"
         
          class="bg-transparent hover:bg-slate-700 text-slate-900 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"
        />
      </form>
    </div>
  );
}
