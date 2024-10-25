const extractWinners = (carObjectList) => {
  const runCounts = carObjectList.map(car => car.runCount);
  const max = Math.max(...runCounts);
  const winners = carObjectList
    .filter(car => car.runCount === max)
    .map(car => car.name);

  return winners;
}

export default extractWinners;