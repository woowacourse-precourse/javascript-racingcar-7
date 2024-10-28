import { Console, MissionUtils } from "@woowacourse/mission-utils";

export const startRace = (tryNumber, carNameObject) => {
  const carNameArray = Object.keys(carNameObject);

  Console.print("\n실행 결과");

  for (let i = 0; i < tryNumber; i++) {
    checkArrayElementIsAdvance(carNameObject, carNameArray);

    displayRaceProgress(carNameObject, carNameArray);
  }

  printFinalWinner(carNameObject);
};

const displayRaceProgress = (carNameObject, carNameArray) => {
  carNameArray.forEach((carName) => {
    const advanceNumber = "-".repeat(carNameObject[carName]);
    Console.print(`${carName} : ${advanceNumber}`);
  });
  Console.print("");
};

const checkArrayElementIsAdvance = (carNameObject, carNameArray) => {
  for (let j = 0; j < carNameArray.length; j++) {
    checkIsAdvance(carNameObject, carNameArray, j);
  }
};

const checkIsAdvance = (carNameObject, carNameArray, idx) => {
  if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
    carNameObject[carNameArray[idx]]++;
  }
};

const printFinalWinner = (carNameObject) => {
  Console.print(`최종 우승자 : ${finalWinner(carNameObject).join(", ")}`);
};

const finalWinner = (carNameObject) => {
  let maxValue = -Infinity;
  const finalWinner = [];

  for (let i in carNameObject) {
    if (carNameObject[i] > maxValue) {
      maxValue = carNameObject[i];
    }
  }

  for (let i in carNameObject) {
    if (carNameObject[i] === maxValue) {
      finalWinner.push(i);
    }
  }

  return finalWinner;
};
