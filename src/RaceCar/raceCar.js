import { GIDE_MESSAGE } from "../Constants/constant.js";
import Output from "../Output/Output.js";
import randomGenerator from "../Utils/randomGenerator.js";

const moveRaceCar = (car) => {
  const randomNum = randomGenerator();
  if (randomNum >= 4) {
    car.position += 1;
  }
};

/**
 *
 * @param {string[]} carList
 * @param {int} tryNumber
 * @returns {string[]} winnerCars
 * @summary 자동차 리스트와 시도 횟수를 받아서 가장 멀리간 자동차를 반환한다.
 */
const raceCar = (carList, tryNumber) => {
  const raceCarList = carList.map((car) => {
    return {
      name: car,
      position: 0,
    };
  });

  Output.resultMessage(GIDE_MESSAGE.result);
  for (let i = 0; i < tryNumber; i++) {
    raceCarList.forEach(moveRaceCar);
    Output.currRaceState(raceCarList);
  }

  const maxnumber = Math.max(...raceCarList.map((car) => car.position));
  return raceCarList.filter((car) => car.position === maxnumber);
};
export default raceCar;
