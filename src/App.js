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

  async run() {
    try {
      const input = await this.console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      const validInput = this.validateInput(input);

    } catch (error) {
      this.console.print(error.message);
    }
  }
}

export default App;
