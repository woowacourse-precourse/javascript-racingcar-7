import { getRandomNumber } from './Random.js';

// 경주 진행
export class raceController {
  // 자동차 이름, 경주 횟수
  constructor(inputNames, inputAttemps) {
    this.cars = inputNames.split(',').map((name) => name.trim());
    this.attemps = inputAttemps;
  }

  // 자동차 경기를 횟수만큼 진행 (반복문)
  raceAttemps() {
    for (let i = 0; i < this.attemps; i++) {
      this.raceRound();
    }
  }

  // 자동차 경기를 진행하는 조건
  raceRound() {
    this.cars.forEach((car) => car.moveForward());
  }

  // 앞으로 전진하는 조건
  moveForward() {
    const randomNumber = getRandomNumber(0, 9);
    if (randomNumber >= 4) {
    }
  }
}
