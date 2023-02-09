import React from 'react'

export default function ResultsDisplay({sessionResults}) {
    function calculateOverall(session){
        return Math.round((session.fatigue + session.headache + session.nausea )/ 3)
    }

    function getDate(date){
    return date.substring(0, 10)
    }



    return (
      <div>
         {sessionResults.map(session=>{
         let average = calculateOverall(session)
              return (
                  <>
                  <h3>Your {getDate(session.date)} Hangover</h3>
                  <p> Hangover overall score: {average} <br></br> Nausea: {session.nausea}. Headache: {session.headache}. Fatigue: {session.fatigue}</p>
                  </>
                  )
  
         })} 
      </div>
    )
}
