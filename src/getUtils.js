import Car from "./Car.js";

const getCarArray = (splittedCarNames) => {
    const carArray = [];
    for (let i = 0; i < splittedCarNames.length; i++) {
      const car = new Car(splittedCarNames[i]);
      carArray.push(car);
    }
    return carArray;
};

const getMaxDistance = (carArray) => {
    let maxDistance = 0;
    for (let i = 0; i < carArray.length; i++) {
      if (carArray[i].distance > maxDistance) {
        maxDistance = carArray[i].distance;
      }
    }
    return maxDistance;
  };

export { getCarArray, getMaxDistance };