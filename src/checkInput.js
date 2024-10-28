import { Console } from '@woowacourse/mission-utils';

export function checkCarNum(carNames) {
  console.log('전달받는 이름 배열', carNames);

  const setCarNames = new Set(carNames);
  if (setCarNames.size <= 1) {
    throw new Error(
      '자동차 경주를 위해서 중복되지 않는 이름을 최소 2개 입력해주세요.'
    );
  } else if (!carNames.every((name) => name.length <= 5)) {
    throw new Error('각 자동차 이름은 5글자 이하로 입력해주세요.');
  }
}
