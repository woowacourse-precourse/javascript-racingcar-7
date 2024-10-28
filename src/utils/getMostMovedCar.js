const getMostMovedCar = (cars) => {
  const maxPosition = Math.max(...cars.map((car) => car.getPosition()));
  return cars
    .filter((car) => car.getPosition() === maxPosition)
    .map((car) => car.getName());
};

export default getMostMovedCar;
