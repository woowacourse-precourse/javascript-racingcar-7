import { MissionUtils } from '@woowacourse/mission-utils';

// 차 이름 구분
export function divisionCarName(input) {
  const delimiter = ',';
  const carNames = input.split(delimiter); // 입력을 ,로 분리하여 배열로 변환
  return carNames;
}

// 차 생성
export function createCarObject(carNames) {
  const names = carNames.map((name) => name.trim()); // 자동차 이름 배열
  const positions = new Array(carNames.length).fill(0); // 전진 수 배열, 초기값은 0
  return { names, positions };
}

// 움직인 만큼  위치 추가
export function shouldMoveForward(carData) {
  const updatedPositions = carData.positions.map((position) => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      return position + 1;
    }
    return position;
  });
  return { ...carData, positions: updatedPositions };
}

// 차 전진 -로 표현
export function getCarPositionsRepresentation(carData) {
  return carData.positions.map((position) => '-'.repeat(position));
}
