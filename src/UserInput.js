import { MissionUtils } from "@woowacourse/mission-utils";
import InputValidator from './InputValidator.js';

class UserInput {
  constructor() {
    this.carNames = [];
    this.attempts = 0;
  }

  // 자동차 이름을 사용자에게 입력받아 설정
  async inputCarNames() {
    const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    this.carNames = input.split(',').map(name => name.trim());
  }

  // 경주 시도 횟수를 사용자에게 입력받아 설정
  async inputAttempts() {
    const input = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    this.attempts = parseInt(input, 10);
  }

  // 입력 값이 유효한지 확인
  validateInput() {
    const validator = new InputValidator();
    validator.validateCarNames(this.carNames);
    validator.validateAttempts(this.attempts);
  }
}

export default UserInput;
