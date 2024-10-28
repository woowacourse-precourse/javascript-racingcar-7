import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidName } from "./validation.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.movement = 0;
  }

  static makeCarList(carName) {
    const nameList = carName.split(',').map(element => element.trim())
    isValidName(nameList);
    const carList = nameList.map(car => new Car(car));
    return carList;
  }

  static #printMovement(carList) {
    carList.forEach(element => {
      MissionUtils.Console.print(`${element.name} : ${'-'.repeat(element.movement)}`);
    });
    MissionUtils.Console.print('');
  }

  static #moveOrStop(carList) {
    carList.forEach(element => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4)
        element.movement += 1;
    });
  }

  static race(carList, tryTime) {
    MissionUtils.Console.print('\n실행 결과');
    Array.from({ length: tryTime }).forEach(() => {
      this.#moveOrStop(carList);
      this.#printMovement(carList);
    });
  }

  static whoIsWinner(carList) {
    const maxMovement = Math.max(...carList.map(player => player.movement));
    const winnerName = carList
      .filter(player => player.movement === maxMovement)
      .map(player => player.name)
      .join(', ');

    MissionUtils.Console.print(`최종 우승자 : ${winnerName}`);
  }
}
