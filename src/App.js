import {Console} from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNames = input.split(",").map((name) => name.trim());

    // 이름 길이 검증 (5자 이하)
    for (const name of carNames) {
      if (name.length === 0 || name.length > 5) {
        Console.print(
          "[ERROR] 자동차 이름은 최소 1자 이상, 최대 5자 이하이어야 합니다."
        );
        return;
      }
    }

    Console.print(`입력한 자동차 이름: ${carNames.join(", ")}`);
    // 추후 기능 구현을 위해 carNames를 저장하거나 전달할 수 있습니다.
  }
}

export default App;
