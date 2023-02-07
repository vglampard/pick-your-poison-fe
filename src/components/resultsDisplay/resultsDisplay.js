import React from 'react'

export default function resultsDisplay({sessionResults}) {
  return (
    <div>
       {sessionResults.map(session=>{
            return (
                <p>{session.fatigue}</p>
            )

       })} 
    </div>
  )
}
