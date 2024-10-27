export const getWinner = async (cars, maxDistance) => {
  const winner = [];

  for (const car of cars) {
    const carDistanceLength = await car.getDistance().length;
    const carName = await car.getName();

    if (carDistanceLength === maxDistance) {
      winner.push(carName);
    }
  }
  return winner;
};
