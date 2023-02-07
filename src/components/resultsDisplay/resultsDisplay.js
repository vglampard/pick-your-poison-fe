import React from 'react'

export default function ResultsDisplay({sessionResults}) {
    function calculateOverall(session){
        return Math.round((session.fatigue + session.headache + session.nausea )/ 3)
    }
  return (
    <div>
       {sessionResults.map(session=>{
       let average = calculateOverall(session)
        console.log(session)
            return (
                <>
                <h3>Hangover overall score: {average}</h3>
                <p>Your hangover on {session.date} was Nausea: {session.nausea}. Headache: {session.headache}. Fatigue: {session.fatigue}</p>
                </>
                )

       })} 
    </div>
  )
}
