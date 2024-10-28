import { MissionUtils } from "@woowacourse/mission-utils";
import {
  COMMA,
  DASH,
  SPACE,
  EMPTY,
  COLON,
  WINNER_CAR,
  ERROR_NAME,
  ERROR_NAME_LENGTH,
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

  let winnerCarList = winner[0];
  for (let i = 1; i < winner.length; i++) {
    winnerCarList += COMMA + SPACE + winner[i];
  }
  MissionUtils.Console.print(WINNER_CAR + winnerCarList);
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
const tryGame = (carList, carDistance) => {
  const move_car_list = makeMoveCarList(carList);

  for (let i = 0; i < carList.length; i++) {
    if (move_car_list[i] == true) {
      carDistance[i] += DASH;
    }

    MissionUtils.Console.print(`${carList[i]} ${COLON} ${carDistance[i]}`);
  }
  MissionUtils.Console.print(SPACE);

  return carDistance;
};
export const startGame = (carList, tryNumber) => {
  let carDistance = new Array(carList.length).fill(EMPTY);

  for (let i = 0; i < tryNumber; i++) {
    carDistance = tryGame(carList, carDistance);
  }

  return carDistance;
};

export const checkNameError = (carList) => {
  for (let i = 0; i < carList.length; i++) {
    if (carList[i] === "") {
      throw new Error(ERROR_NAME);
    }
    if (carList[i].length > 5) {
      throw new Error(ERROR_NAME_LENGTH);
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
