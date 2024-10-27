import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 자동차 이름과 시도 횟수를 입력받기
      const carNames = await this.getCarNames();
      const attemptCount = await this.getAttemptCount();

      // 입력된 값 확인
      MissionUtils.Console.print(`자동차 이름: ${carNames.join(", ")}`);
      MissionUtils.Console.print(`시도 횟수: ${attemptCount}`);
    } catch (error) {
      // 오류 발생 시 에러 메시지 출력
      MissionUtils.Console.print(error.message);
    }
  }

  // 자동차 이름 입력
  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = input.split(",").map((name) => name.trim());

    // 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능
    carNames.forEach((name) => {
      if (name.length === 0 || name.length > 5) {
        throw new Error(
          "[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다."
        );
      }
    });

    return carNames;
  }

  // 시도 횟수 입력
  async getAttemptCount() {
    const input = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const attemptCount = Number(input);

    // 시도 횟수는 0보다 큰 숫자여야 함
    if (isNaN(attemptCount) || attemptCount <= 0) {
      throw new Error("[ERROR] 시도 횟수는 0보다 큰 숫자여야 합니다.");
    }

    return attemptCount;
  }
}

export default App;
