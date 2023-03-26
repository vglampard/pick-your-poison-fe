export function getDate(date) {
    return date.substring(0, 10);
  }

  export function getGraphArray(session){
    // takes in complex object
return [
  { name: "🤢", severity: session.nausea },
  { name: "😴", severity: session.fatigue },
  { name: "🤕", severity: session.headache },
]; 
  }
