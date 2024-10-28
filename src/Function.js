import { MissionUtils } from "@woowacourse/mission-utils";
import {
  COMMA,
  DASH,
  SPACE,
  EMPTY,
  COLON,
  WINNER_CAR,
  ERROR_NAME,
  ERROR_NUMBER,
  ERROR_PLUS_NUMBER,
} from "./Constant.js";

export const separateCarList = (carName) => {
  const car_list = carName.split(COMMA);
  return car_list;
};

export const printWinner = (carList, carDistance) => {
  carDistance = carDistance.map((distance) => {
    return distance.length;
  });

  let winnerDistance = Math.max(...carDistance);
  let winner = [];
  carDistance.forEach((distance, index) => {
    if (winnerDistance == distance) {
      winner.push(carList[index]);
    }
  });

  let winnerCar = winner[0];
  for (let i = 1; i < winner.length; i++) {
    winnerCar += COMMA + SPACE + winner[i];
  }
  MissionUtils.Console.print(WINNER_CAR + winnerCar);
};

const checkMoveForward = () => {
  const try_move = MissionUtils.Random.pickNumberInRange(0, 9);
  if (try_move >= 4) {
    return true;
  }
  return false;
};

const makeMoveCarList = (carList) => {
  const move_car_list = [];
  for (let i = 0; i < carList.length; i++) {
    const try_move = checkMoveForward();
    move_car_list.push(try_move);
  }
  return move_car_list;
};

export const playGame = (carList, tryNumber) => {
  const carDistance = new Array(carList.length).fill(EMPTY);
  for (let j = 0; j < tryNumber; j++) {
    const moveCarList = makeMoveCarList(carList);
    for (let i = 0; i < carList.length; i++) {
      if (moveCarList[i] == true) {
        carDistance[i] += DASH;
      }
      MissionUtils.Console.print(`${carList[i]} ${COLON} ${carDistance[i]}`);
    }
    MissionUtils.Console.print(SPACE);
  }
  return carDistance;
};

export const checkNameError = (carList) => {
  for (let i = 0; i < carList.length; i++) {
    if (carList[i].length > 5) {
      throw new Error(ERROR_NAME);
    }
  }
};
export const checkNumberError = (tryNumber) => {
  if (isNaN(tryNumber)) {
    throw new Error(ERROR_NUMBER);
  }
  if (tryNumber <= 0) {
    throw new Error(ERROR_PLUS_NUMBER);
  }
};
