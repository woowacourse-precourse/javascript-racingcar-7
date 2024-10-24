import { MissionUtils } from "@woowacourse/mission-utils";

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

    // 각 라운드마다 전진 상태 출력
    carNames.forEach((car) => {
      MissionUtils.Console.print(`${car} : ${"-".repeat(carPositions[car])}`);
    });
    MissionUtils.Console.print(""); // 라운드 끝날 때 줄바꿈
  }
}

export function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
