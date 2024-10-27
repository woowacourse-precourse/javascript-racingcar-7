import randomGenerator from "../../Utils/randomGenerator.js";
import printCurrRaceState from "../Output/printCurrRaceState.js";

/**
 * @param {{ name: string, position: number }} car
 * @summary Random 숫자를 발생시키고 4이상일 경우 자동차를 이동시킨다.
 */
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

  printResultMessage(GIDE_MESSAGE.result);
  for (let i = 0; i < tryNumber; i++) {
    raceCarList.forEach(moveRaceCar);
    printCurrRaceState(raceCarList);
  }

  const maxnumber = Math.max(...raceCarList.map((car) => car.position));
  return raceCarList.filter((car) => car.position === maxnumber);
};
export default raceCar;
