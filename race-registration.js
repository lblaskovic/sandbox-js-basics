let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 29;

if ( age > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(`${raceNumber} starts at 9:30 am`);
} else if (age > 18 && !registeredEarly) {
  console.log(`${raceNumber} starts at 12:30 pm`)
} else if (age === 18) {
  console.log(`See the registration desk`);
}

if (age < 18){
  console.log(`${raceNumber} starts at 12:30pm`);
}