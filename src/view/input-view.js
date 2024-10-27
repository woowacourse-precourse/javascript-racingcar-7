import { Console } from '@woowacourse/mission-utils';

const INPUT_MESSAGE = Object.freeze({
  CAR_NAMES_INPUT: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ATTEMPT_COUNT_INPUT: '시도할 횟수는 몇 회인가요?\n',
});

class InputView {
  getCarNames() {
    return Console.readLineAsync(INPUT_MESSAGE.CAR_NAMES_INPUT);
  }

  getAttemptCount() {
    return Console.readLineAsync(INPUT_MESSAGE.ATTEMPT_COUNT_INPUT);
  }
}

export default InputView;
