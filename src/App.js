import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 자동차 이름을 입력받기
      const carNames = await this.getCarNames();

      // 입력된 자동차 이름 확인
      MissionUtils.Console.print(`자동차 이름: ${carNames.join(", ")}`);
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
}

export default App;
