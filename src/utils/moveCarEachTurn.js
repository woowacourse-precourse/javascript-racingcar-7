import shouldCarMove from "./shouldCarMove.js";

const moveCarEachTurn = async (cars, carMovements) => {
  cars.forEach((_, index) => {
    if (shouldCarMove()) {
      carMovements[index]++;
    }
  });
};

export default moveCarEachTurn;
