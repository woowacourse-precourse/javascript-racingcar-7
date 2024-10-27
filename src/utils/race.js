import { Console, MissionUtils } from "@woowacourse/mission-utils";

export const startRace = (tryNumber, carNameObject) => {
  const carNameArray = Object.keys(carNameObject);

  Console.print("\n실행 결과");

  for (let i = 0; i < tryNumber; i++) {
    checkArrayElementIsAdvance(carNameObject, carNameArray);
  }
};

const checkArrayElementIsAdvance = (carNameObject, carNameArray) => {
  for (let idx = 0; idx < carNameArray.length; idx++) {
    checkIsAdvance(carNameObject, carNameArray, idx);
  }
};

const checkIsAdvance = (carNameObject, carNameArray, idx) => {
  if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
    carNameObject[carNameArray[idx]]++;
  }
};
