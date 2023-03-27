import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getGraphArray } from "../../utils/utils";

export default function Graph({ session }) {
  let sessionData = getGraphArray(session);
  return (
    <BarChart
      width={150}
      height={150}
      data={sessionData}
      margin={{
        top: 5,
        right: 2,
        left: 0,
        bottom: 5,
      }}
   
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="severity" />
      <Tooltip />
      <Legend />

      <Bar dataKey="severity" fill="#82ca9d" />
    </BarChart>
  );
}
