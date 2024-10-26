import { MissionUtils } from '@woowacourse/mission-utils';

export function divisionCarName(input) {
  const delimiter = ',';
  const carNames = input.split(delimiter); // 입력을 ,로 분리하여 배열로 변환
  return carNames;
}

export function createCarObject(carNames) {
  const names = carNames.map((name) => name.trim()); // 자동차 이름 배열
  const positions = new Array(carNames.length).fill(0); // 전진 수 배열, 초기값은 0
  return { names, positions };
}

export function moveCars(carData) {
  const updatedPositions = carData.positions.map((position) => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    // 랜덤 값이 4 이상이면 전진 수를 증가
    if (randomNumber >= 4) {
      return position + 1;
    }
    return position;
  });

  // 새로운 배열 반환
  return { ...carData, positions: updatedPositions };
}
