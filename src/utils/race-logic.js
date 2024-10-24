import { MissionUtils } from "@woowacourse/mission-utils";

export function raceCars(carNames, tryCount, getRandomNumber) {
  const carPositions = {};

  carNames.forEach((car) => {
    carPositions[car] = 0;
  });

  for (let i = 0; i < tryCount; i++) {
    carNames.forEach((car) => {
      const moveCount = getRandomNumber();
      if (moveCount >= 4) {
        carPositions[car] += 1;
      }
    });

    printRoundResults(carNames, carPositions);
  }
  const winners = findWinners(carNames, carPositions);
  printWinners(winners);
}

export function getRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}

function printRoundResults(carNames, carPositions) {
  carNames.forEach((car) => {
    MissionUtils.Console.print(`${car} : ${"-".repeat(carPositions[car])}`);
  });
  MissionUtils.Console.print("");
}

function printWinners(winners) {
  MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
}

function findWinners(carNames, carPositions) {
  const maxPosition = Math.max(...Object.values(carPositions));
  return carNames.filter((car) => carPositions[car] === maxPosition);
}
