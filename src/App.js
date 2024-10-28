import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.console = Console;
    this.random = MissionUtils.Random;
  }

  validateInput(input) {
    const items = input.split(',').map(item => item.trim());
    if (items.some(item => item.length === 0 || item.length > 5)) {
      throw new Error("[ERROR] 입력 오류: 각 항목은 1자 이상 5자 이하로 입력해야 합니다.");
    }
    return items;
  }

  validateAttempt(input) {
    const attempt = parseInt(input, 10);
    if (isNaN(attempt) || attempt <= 0) {
      throw new Error("[ERROR] 입력 오류: 시도 횟수는 양의 정수로 입력해야 합니다.");
    }
    return attempt;
  }

  async run() {
    try {
      const input = await this.console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      const validInput = this.validateInput(input);

      const attemptInput = await this.console.readLineAsync("시도할 횟수를 입력하세요.\n");
      const attemptCount = this.validateAttempt(attemptInput);

    } catch (error) {
      this.console.print(error.message);
    }
  }
}

export default App;
