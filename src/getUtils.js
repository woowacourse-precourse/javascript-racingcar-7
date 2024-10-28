import Car from "./Car.js";

const getCarArray = (splittedCarNames) => {
    const carArray = [];
    for (let i = 0; i < splittedCarNames.length; i++) {
      const car = new Car(splittedCarNames[i]);
      carArray.push(car);
    }
    return carArray;
};

export {getCarArray};