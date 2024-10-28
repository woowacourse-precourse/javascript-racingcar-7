const getWinners = raceResult => {
  const MAX_DISTANCE = Math.max(...raceResult.map(car => car.position.length));

  const WINNERS = raceResult
    .filter(car => car.position.length === MAX_DISTANCE)
    .map(car => car.name);

  return WINNERS;
};
export default getWinners;
