export const getWinner = async (cars, maxDistance) => {
  const winner = [];

  for (const car of cars) {
    const CAR_DISTANCE = await car.getDistance().length;
    const CAR_NAME = await car.getName();

    if (CAR_DISTANCE === maxDistance) {
      winner.push(CAR_NAME);
    }
  }
  return winner;
};
