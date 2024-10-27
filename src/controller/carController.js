import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validate from "../utils/validate.js";
import UserView from "../View/UserView.js";
import { MESSAGE } from "../constants/message.js";
import CarModel from "../model/carModel.js";

class CarController{
  constructor() {
    this.Error = new Validate();
    this.print = new UserView();
    // this.carList = []; // 초기값은 추후 model로 분리할 것이다.
    // this.count = 0;
    // this.distance = new Map(); // 해시맵으로 이름과 거리를 저장
    this.carModel = new CarModel();
  }

  async raceStart() {
    await this.inputCarList();
    await this.inputCount();

    await this.moveforward();
    // const winner = await this.getWinner();
    const winner = this.carModel.getWinner();
    this.print.printWinner(winner);
  }

  async inputCarList() {
    const carString = await Console.readLineAsync(MESSAGE.CAR_NAME_INPUT);
    this.Error.carValidate(carString);
    const carNames = carString.split(',');
    carNames.forEach((name) => {
      // this.carList.push(name.trim());
      this.carModel.addCar(name.trim());
    })
  }

  async inputCount() {
    // this.count = await Console.readLineAsync(MESSAGE.COUNT_INPUT);
    const count = await Console.readLineAsync(MESSAGE.COUNT_INPUT);
    this.Error.countValidate(count); //this.count로 수정
    this.carModel.setCount(parseInt(count, 10)); // 추가
  }

  async moveforward() {
    Console.print(MESSAGE.OUTPUT);
    for (let i=0; i<this.carModel.count; i++){ // this.count로 수정
        // await this.oneStep();
        this.carModel.moveCars(); //추가
        this.carModel.carList.forEach(car => {
          this.print.printProgress(car, this.carModel.distance.get(car));
        });
        Console.print('');
    }
  }
  // async oneStep() { //랜덤 숫자를 생성하고 carList를 순회하면서 값을 증가시킨다.
  //   this.carList.forEach((car) => {
  //     let speed = MissionUtils.Random.pickNumberInRange(0, 9);
  //     if(speed >= 4){
  //       if(!this.distance.get(car)){
  //         this.distance.set(car, 1);
  //         this.print.printProgress(car, this.distance.get(car));
  //       } else{
  //         this.distance.set(car, this.distance.get(car)+1);
  //         this.print.printProgress(car, this.distance.get(car));
  //       }
  //     } else{
  //       this.print.printProgress(car, this.distance.get(car));
  //     }
  //   })
  // }
  // async getWinner() {
  //   // 해시맵에서 우승자를 추출 구현
  //   const winner = [];
  //   const allRecords = [];
  //   let maxRecord = 0;
  //   for (let [_, record] of this.distance){
  //     allRecords.push(record);
  //   }
  //   maxRecord = Math.max(...allRecords);
  //   for (let [carName, record] of this.distance){
  //     if(record === maxRecord){ // 문자열 비교 분석 필요
  //       winner.push(carName);
  //     }
  //   }
  //   return winner;
  // }
}

export default CarController;