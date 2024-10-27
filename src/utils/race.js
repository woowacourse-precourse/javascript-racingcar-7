import { Console, MissionUtils } from "@woowacourse/mission-utils";

export const startRace = (tryNumber, carNameObject) => {
  const carNameArray = Object.keys(carNameObject);

  Console.print("\n실행 결과");

  for (let i = 0; i < tryNumber; i++) {
    checkArrayElementIsAdvance(carNameObject, carNameArray);

    displayRaceProgress(carNameObject, carNameArray);
  }
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
