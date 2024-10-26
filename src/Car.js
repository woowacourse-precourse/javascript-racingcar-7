import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidName } from "./validation.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.movement = 0;
  }

  static makeCarList(str) {
    let carList = str.split(',');
    carList = carList.map(element => element.trim())
    isValidName(carList); // 유효성 검사

    // 이름마다 각각 Car 인스턴스 생성하기
    carList = carList.map(car => new Car(car));
    return carList;
  }

  static moveOrStop(carList) {
    carList.forEach(element => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        element.movement += 1;
      }
      MissionUtils.Console.print(`${element.name} : ${'-'.repeat(element.movement)}`);
    });
    MissionUtils.Console.print('');
  }

  static race(carList, tryTime) {
    MissionUtils.Console.print('\n실행 결과');
    Array.from({ length: tryTime }).forEach(() => this.moveOrStop(carList))
  }

  static whoIsWinner(carList) {
    const maxMovement = Math.max(...carList.map(player => player.movement));
    const winnerList = carList
      .filter(player => player.movement === maxMovement)
      .map(player => player.name);

    MissionUtils.Console.print(`최종 우승자 : ${winnerList.join(', ')}`);
  }
}