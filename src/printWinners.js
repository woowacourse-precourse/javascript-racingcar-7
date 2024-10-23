const printWinners = function printWinners(carArray) {
  const maxDistance = carArray.reduce((maxDistance, car) => {
    return Math.max(maxDistance, car.getDistance());
  }, 0);

  const winners = carArray.filter((car) => car.getDistance() === maxDistance);
};

export default printWinners;
