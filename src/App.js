import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    // 자동차 이름 입력 및 이동 횟수 입력
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    let name_input = await Console.readLineAsync("");
    let car_names = name_input.split(",");
    car_names = car_names.map((name) => name.trim());
    // 에러 조건 1 : 입력된 이름이 5자를 넘어가는가?
    for (let name of car_names) {
      if (name.length > 5) {
        throw new Error("[ERROR]");
      }
    }

    Console.print("시도할 횟수는 몇 회인가요?");
    const loop = await Console.readLineAsync("");
  }
}

export default App;
