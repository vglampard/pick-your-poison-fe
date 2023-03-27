import axios from "axios";

// Get more presentable substring for date display
export function getDate(date) {
  return date.substring(0, 10);
}

export function getGraphArray(session) {
  // takes in full session object and pulls out only info needed for graph, in the format required.
  return [
    { name: "🤢", severity: session.nausea },
    { name: "😴", severity: session.fatigue },
    { name: "🤕", severity: session.headache },
  ];
}

// Function that strips away any empty drink values from drinks objects so that it can be used for visualisation.
export function trimToDrinks(trimmedDrinks) {
  let entries = Object.entries(trimmedDrinks);
  return entries.filter((entry) => entry[1] > 0);
}

// Create rundown text string detailing drinks consumed
export function createRundown(drinks) {
  return drinks
    .map((drink) => {
      return `${drink[1]} x ${drink[0]};`;
    })
    .join(" ");
}

export function calculateOverall(session) {
  return Math.round((session.fatigue + session.headache + session.nausea) / 3);
}

export function toggleState(setState, state) {
  setState(!state);
}

export function getWorstHangover(sessionsResults) {
  let worst = {};
  let max = 0;
  for (let i = 0; i < sessionsResults.length; i++) {
    let sesh = sessionsResults[i];
    let hangoverAverage = calculateOverall(sesh);
    if (hangoverAverage > max) {
      max = hangoverAverage;
      worst = sesh;
    }
  }
  return worst;
}

export async function deleteSession(session) {
  let date = getDate(session.date);
  await axios.delete(
    `https://pick-your-poison-backend.onrender.com/api/sessions/${date}`
  );
}
