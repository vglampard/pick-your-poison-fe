import React from "react";
import logo from "./logo.png";

export default function Banner() {
  return (
    <div className="p-10 flex flex-col items-center">
      <img src={logo} alt="skull glass" className="m-4 w-1/4"/>
      <div>
        <h1 className="uppercase font-bold text-3xl"> What's your poison?</h1>
        <h6>Keep track of which combos hit you hardest!</h6>
      </div>
    </div>
  );
}
