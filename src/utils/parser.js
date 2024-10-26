export const parseCars = (cars) => {
  return cars.split(',').map((car) => car.trim());
};