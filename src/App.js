import { Console } from "@woowacourse/mission-utils";

class App {
  constructor(){
    this.carNameArr = [];
    this.count = 0;
  }

  async run() {
    // 자동차 이름, 횟수 입력받기
    await this.getCarNameCount();
  }

  async getCarNameCount(){
    try{
      const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      this.carNameArr = input.split(',').map(car => car.trim());
      const num = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      this.count = Number(num);
    }catch(error){
      throw new Error("[ERROR]");
    }
  }
}

export default App;
