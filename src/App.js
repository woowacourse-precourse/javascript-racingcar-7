import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.car_names = [];
    this.game_results = [];
  }
  
  async run() {
    // 1. 자동차 입력 받기 : 쉼표(,)로 구분하여 저장
    const car_input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
  }
}

export default App;