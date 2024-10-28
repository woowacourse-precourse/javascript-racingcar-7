import { MissionUtils } from "@woowacourse/mission-utils";

export const separateCarList = (carName) => {
  const car_list = carName.split(",");
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

  let winnerPrint = "최종 우승자 : ";
  let winnerCar = winner[0];
  for (let i = 1; i < winner.length; i++) {
    winnerCar += ", " + winner[i];
  }
  MissionUtils.Console.print(winnerPrint + winnerCar);
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
  const carDistance = new Array(carList.length).fill("");
  for (let j = 0; j < tryNumber; j++) {
    const moveCarList = makeMoveCarList(carList);
    for (let i = 0; i < carList.length; i++) {
      if (moveCarList[i] == true) {
        carDistance[i] += "-";
      }
      MissionUtils.Console.print(`${carList[i]} : ${carDistance[i]}`);
    }
    MissionUtils.Console.print(" ");
  }
  return carDistance;
};
