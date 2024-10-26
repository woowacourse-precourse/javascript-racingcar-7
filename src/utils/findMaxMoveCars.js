const findMaxMoveCars = (cars) => {
  return cars.reduce((acc, currentCar) => {
    if (acc.length === 0 || currentCar.move > acc[0].move) {
      return [currentCar.name];
    }
    if (currentCar.move === acc[0].move) {
      acc.push(currentCar.name);
    }
    return acc;
  }, []);
};

export default findMaxMoveCars;
