import { MissionUtils } from '@woowacourse/mission-utils';

export function divisionCarName(input) {
  const delimiter = ',';
  const carNames = input.split(delimiter); // 입력을 ,로 분리하여 배열로 변환
  return carNames;
}

export function createCarObject(carNames) {
  // 각 이름마다 car 객체를 생성하여 배열로 반환
  const cars = carNames.map((name) => ({
    name: name.trim(),
    forwardNum: 0,
  }));

  return cars;
}
