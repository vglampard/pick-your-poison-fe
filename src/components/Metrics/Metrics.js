import React from 'react'
import DrinksBreakdownDisplay from '../DrinksBreakdownDisplay/DrinksBreakdownDisplay'
import { getDate } from '../../utils/utils'

export default function Metrics({worstHangover}) {
    console.log("WH at metrics:", worstHangover)
  return (
  
    <div>
    <p>These caused your worst hangover so far on: </p>{worstHangover.date} {" "}
    <DrinksBreakdownDisplay session={worstHangover} />
  </div>
   
  )
}

