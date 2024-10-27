import { Console } from "@woowacourse/mission-utils";
import { GIDE_MESSAGE } from "../../Constants/constant.js";
import randomGenerator from "../../Utils/randomGenerator.js";
import printResultMessage from "../Output/printResultMessage.js";

const moveRaceCar = (car) => {
  const randomNum = randomGenerator();
  if (randomNum >= 4) {
    car.position += 1;
  }
};

const raceCar = (carList, tryNumber) => {
  const raceCarList = carList.map((car) => {
    return {
      name: car,
      position: 0,
    };
  });

  printResultMessage(GIDE_MESSAGE.result);

  for (let i = 0; i < tryNumber; i++) {
    raceCarList.forEach(moveRaceCar);
  }
};
export default raceCar;
