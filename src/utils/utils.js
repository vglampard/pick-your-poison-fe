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
