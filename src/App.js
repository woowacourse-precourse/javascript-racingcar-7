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
    
    // 2. 게임을 몇번 시도할 건지 횟수 입력 받기(횟수를 라운드로 표현)
    const number_input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const rounds = Number(number_input);
  }
}

export default App;