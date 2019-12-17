let raceNumber = Math.floor(Math.random() * 1000);

registeredEarly = Math.random() < 0.5

runnerAge = 20

if (registeredEarly == true && runnerAge > 18) {
  raceNumber += 1000
}

if (registeredEarly == true && runnerAge > 18) {
  console.log(`The race will start at 9:30 am. Your Race Number is ${raceNumber}`);
} else if (registeredEarly == false && runnerAge > 18) {
  console.log(`Late adults run at 11:00 am. Your Race Number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration). Your Race Number is ${raceNumber}`)
} else {
  console.log('Please see the registration desk for assistance')
}

