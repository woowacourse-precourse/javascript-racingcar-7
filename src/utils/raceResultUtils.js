const getMaxPosition = (cars) => {
  return Math.max(...cars.map((car) => car.position));
};

const filterCarsByMaxPosition = (cars, maxPosition) => {
  return cars.filter((car) => car.position === maxPosition);
};

const extractCarNames = (cars) => {
  return cars.map((car) => car.name);
};

export { getMaxPosition, filterCarsByMaxPosition, extractCarNames };
