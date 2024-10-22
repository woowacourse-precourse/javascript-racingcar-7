const CarsInputParser = cars => {
  return cars.split(',').map(car => car.trim());
};

export default CarsInputParser;
