import Car from '../Car.js';

// string[] => Car[]
const createCarList = (carNameList) => {
  const carList = carNameList.map((name) => {
    return new Car(name);
  });

  return carList;
};

export default createCarList;
