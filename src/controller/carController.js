import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validate from "../utils/validate.js";
import UserView from "../View/UserView.js";

class CarController{
  constructor() {
    this.Error = new Validate();
    this.print = new UserView();
    this.carList = []; // 초기값은 추후 model로 분리할 것이다.
    this.count = 0;
    this.distance = new Map(); // 해시맵으로 이름과 거리를 저장
  }

  async raceStart() {
    await this.inputCarList();
    await this.inputCount();

    await this.moveforward();
    const winner = await this.getWinner();
    this.print.printWinner(winner);
  }

  async inputCarList() {
    const carString = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    this.Error.carValidate(carString);
    const carNames = carString.split(',');
    carNames.forEach((name) => {
      this.carList.push(name.trim());
    })
  }

  async inputCount() {
    this.count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    this.Error.countValidate(this.count);
  }

  async moveforward() {
    Console.print("실행 결과");
    for (let i=0; i<this.count; i++){
        await this.oneStep();
        Console.print('');
    }
  }
  async oneStep() { //랜덤 숫자를 생성하고 carList를 순회하면서 값을 증가시킨다.
    this.carList.forEach((car) => {
      let speed = MissionUtils.Random.pickNumberInRange(0, 9);
      if(speed >= 4){
        if(!this.distance.get(car)){
          this.distance.set(car, 1);
          this.print.printProgress(car, this.distance.get(car));
          // 결과 출력 View
        } else{
          this.distance.set(car, this.distance.get(car)+1);
          this.print.printProgress(car, this.distance.get(car));
          // 결과 출력 View
        }
      } else{
        this.print.printProgress(car, this.distance.get(car));
      }
      // 전진하지 않는 경우도 출력 View
    })
  }
  async getWinner() {
    // 해시맵에서 우승자를 추출 구현
    const winner = [];
    const allRecords = [];
    let maxRecord = 0;
    for (let [_, record] of this.distance){
      allRecords.push(record);
    }
    maxRecord = Math.max(...allRecords);
    for (let [carName, record] of this.distance){
      if(record === maxRecord){ // 문자열 비교 분석 필요
        winner.push(carName);
      }
    }
    return winner;
  }
}

export default CarController;