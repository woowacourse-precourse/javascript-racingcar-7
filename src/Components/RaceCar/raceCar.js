import { GIDE_MESSAGE } from "../../Constants/constant.js";
import randomGenerator from "../../Utils/randomGenerator.js";
import printResultMessage from "../Output/printResultMessage.js";
import printCurrRaceState from "../Output/printCurrRaceState.js";
import printWinner from "../Output/printWinner.js";

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
    printCurrRaceState(raceCarList);
  }

  const maxnumber = Math.max(...raceCarList.map((car) => car.position));
  const winnerCars = raceCarList.filter((car) => car.position === maxnumber);
  printWinner(winnerCars);
};
export default raceCar;
