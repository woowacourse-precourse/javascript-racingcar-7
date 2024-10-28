import { Random } from "@woowacourse/mission-utils";
import { printFinalWinners, printRacing } from "./printRacing.js";

const numberCount = [];

const setNewRandomArray = (randomNumber, index) => {
  if (randomNumber >= 4) {
    numberCount[index] = 1;
  }
  if (randomNumber < 4) {
    numberCount[index] = 0;
  }
};

const setRandomArray = (randomNumber, index) => {
  if (randomNumber >= 4) {
    numberCount[index] += 1; // 4 이상일 때 이동 횟수를 1 증가
  }
};

// 각 자동차의 랜덤 숫자 지정 및 전진 조건
const setRandomNumber = (car, index) => {
  const randomNumber = Random.pickNumberInRange(0, 9);

  if (numberCount[index] === undefined) {
    setNewRandomArray(randomNumber, index);
  } else {
    setRandomArray(randomNumber, index);
  }
};

const setRandom = (carList, count) => {
  let currentRound = 0;

  const runRound = () => {
    carList.forEach(setRandomNumber);
    printRacing(carList, numberCount);
    currentRound += 1;

    if (currentRound < count) {
      setTimeout(runRound, 1000);
    } else {
      printFinalWinners(carList, numberCount);
    }
  };

  runRound();
};

export default setRandom;
