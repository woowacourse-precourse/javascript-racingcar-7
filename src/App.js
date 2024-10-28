import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const maxAttempts = await this.getAttempts();

    } catch (error) {
      Console.print(error.message);
      return Promise.reject(error);
    }
  }

  async getCarNames() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요 (쉼표로 구분): ");
    return Validate.validateCarNames(input);
  }

  async getAttempts() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?: ");
    return Validate.validateAttempts(input); 
  }
}

export default App;
