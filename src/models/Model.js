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
