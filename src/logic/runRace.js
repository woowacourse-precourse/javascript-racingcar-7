export default function runRace(attemptCount, cars) {
  const raceResults = [];

  for (let i = 0; i < attemptCount; i++) {
    cars.forEach((car) => car.move());

    const result = cars.map((car) => `${car.name} : ${car.movement}`);
    raceResults.push(result);
  }

  return raceResults;
}
