import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      // 자동차 이름 입력
      const inputCarList = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );

      // 자동차 이름 분리, 이름 공백 제거
      const carNames = inputCarList.split(',').map((name) => name.trim());

      this.validateCarNames(carNames);

      // 시도 횟수 입력
      const inputTryCount = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
      );

      // 시도 횟수 숫자로 변환, 유효성 검사
      const tryCount = Number(inputTryCount);
      this.validateTryCount(tryCount);
    } catch (error) {
      throw error;
    }
  }

  // 클래스 메서드로 유효성 검사 정의
  validateCarNames(carNames) {
    if (carNames.length < 2) {
      throw new Error('[ERROR] 자동차는 2개 이상 입력해야 합니다.');
    }
    if (carNames.some((name) => name.length > 5)) {
      throw new Error(
        '[ERROR] 자동차 이름은 1글자 이상 5글자 이하로 입력해야 합니다.'
      );
    }
    if (new Set(carNames).size !== carNames.length) {
      throw new Error('[ERROR] 중복되는 자동차 이름은 입력할 수 없습니다.');
    }
  }

  validateTryCount(tryCount) {
    if (isNaN(tryCount) || tryCount <= 0 || !Number.isInteger(tryCount)) {
      throw new Error('[ERROR] 시도할 횟수는 양의 정수여야 합니다.');
    }
  }
}

export default App;
