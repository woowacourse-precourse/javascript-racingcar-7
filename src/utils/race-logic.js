import { MissionUtils } from "@woowacourse/mission-utils";

// 경주를 실행하는 함수
export function raceCars(carNames, tryCount, getRandomNumber) {
  const carPositions = {};

  // 각 자동차의 초기 전진 상태 설정
  carNames.forEach((car) => {
    carPositions[car] = 0;
  });

  // 주어진 시도 횟수만큼 경주 진행
  for (let i = 0; i < tryCount; i++) {
    carNames.forEach((car) => {
      const moveCount = getRandomNumber();
      if (moveCount >= 4) {
        carPositions[car] += 1; // 전진할 때마다 상태 증가
      }
    });

    // 전진 상태 출력 함수 호출
    printRoundResults(carNames, carPositions);
  }
  const winners = findWinners(carNames, carPositions);
  printWinners(winners);
}

// 각 라운드의 결과를 출력하는 함수
function printRoundResults(carNames, carPositions) {
  carNames.forEach((car) => {
    MissionUtils.Console.print(`${car} : ${"-".repeat(carPositions[car])}`);
  });
  MissionUtils.Console.print(""); // 라운드 끝날 때 줄바꿈
}

// 우승자를 출력하는 함수
function printWinners(winners) {
  MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
}

// 우승자를 찾는 함수
function findWinners(carNames, carPositions) {
  const maxPosition = Math.max(...Object.values(carPositions)); // 가장 많이 전진한 값 찾기
  return carNames.filter((car) => carPositions[car] === maxPosition); // 우승자 찾기
}

export function getRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}
