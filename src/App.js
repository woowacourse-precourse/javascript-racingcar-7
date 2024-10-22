import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carName = await this.carInput();
    const time = await this.timeInput();
  }
  async carInput(){
    const carNameArray = Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    return carNameArray;
  }
  async timeInput(){
    const time = Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    return time;
  }
}

export default App;
