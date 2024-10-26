const findMaxMoveCars = (cars) => {
  return cars.reduce((acc, currentCar) => {
    if (acc.length === 0 || currentCar.getMove() > acc[0].getMove()) {
      return [currentCar];
    }
    if (currentCar.getMove() === acc[0].getMove()) {
      acc.push(currentCar);
    }
    return acc;
  }, []);
};

export default findMaxMoveCars;
