import { Console } from "@woowacourse/mission-utils";

export function checkWinners(cars) {
  Console.print(
    `최종 우승자 : ${getWinners(cars, getMaxDistance(cars)).join(", ")}`
  );
}

function getMaxDistance(cars) {
  return cars.reduce(compareDistance, "");
}

function compareDistance(maxScore, car) {
  if (maxScore.length < car.distance.length) {
    return car.distance;
  }
  return maxScore;
}

function getWinners(cars, maxScore) {
  return cars.filter((car) => car.distance === maxScore).map((car) => car.name);
}
