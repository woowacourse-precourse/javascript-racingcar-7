import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carsNames = await Console.readLineAsync(
        "경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n"
      );

      const nameList = carsNames.split(",").map((car) => car.trim());
      this.validCarNames(nameList);

      const playNum = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
      this.validateMoveCount(playNum);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }

  validCarNames(nameList) {
    nameList.forEach((name) => {
      if (name.length === 0 || name.length > 5) {
        throw new Error("자동차 이름은 1자 이상 5자 이하만 가능합니다.");
      }
    });
  }

  validateMoveCount(playNum) {
    if (isNaN(playNum) || playNum <= 0) {
      throw new Error("[ERROR] 이동 횟수는 1 이상의 정수여야 합니다.");
    }
  }
}

export default App;
