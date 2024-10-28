import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    
    const cars = this.getCars();
    const attemptCnt = this.getAttemptCount();

  }

  async getCars(){
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const input = await Console.readLineAsync("");

    const cars = input.split(",");

    let carsSet = new Set();
    cars.forEach((car)=>{
      if(cars.length <= 0 || cars.length > 5)
        throw new Error("[ERROR] 자동차 이름의 길이는 1~5자 사이이어야 합니다.");

      if(carsSet.has(car))
        throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
    })

    return cars;
  }

  async getAttemptCount(){
    Console.print("시도할 횟수는 몇 회인가요?");
    let attemptCnt = await Console.readLineAsync("").trim();
    
    attemptCnt = +attemptCnt;
    if(isNaN(attemptCnt) || attemptCnt <= 0)
      throw new Error("[ERROR] 시도 횟수는 자연수이어야 합니다.")

    return attemptCnt;
  }

  

}

export default App;
