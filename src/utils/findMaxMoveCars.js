const findMaxMoveCars = (cars) => {
  return cars.reduce((acc, currentCar) => {
    if (acc.length === 0 || currentCar.move > acc[0].move) {
      return [currentCar];
    }
    if (currentCar.move === acc[0].move) {
      acc.push(currentCar);
    }
    return acc;
  }, []);
};

export default findMaxMoveCars;
