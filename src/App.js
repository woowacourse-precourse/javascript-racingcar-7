import { Console } from "@woowacourse/mission-utils";

class App {
  constructor(){
    this.carNameObj= {};
    this.count = 0;
  }

  async run() {
    // 자동차 이름, 횟수 입력받기
    await this.getCarNameCount();
  }

  async getCarNameCount(){
    try{
      let input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      input = input.split(',').map(car => car.trim());
      // 이름 길이 확인
      this.checkNameLength(input);

      this.carNameObj = input.reduce((obj, key) => {
        obj[key] = 0;
        return obj;
      },{});

      const num = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      this.count = Number(num);
    }catch(error){
      Console.print("ERROR: 입력 오류");
      throw new Error("[ERROR]");
    }
  }

  checkNameLength(input){
    input.forEach(carName => {
      if(carName.length > 5){
        Console.print("ERROR: 자동차 이름이 5자보다 많습니다.")
        throw new Error("[ERROR]");
      }
    });
  }
}

export default App;
