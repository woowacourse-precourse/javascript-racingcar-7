import { getRandomNumber } from './Random.js';

// 경주 진행
export class raceController {
  // 자동차 이름, 경주 횟수
  constructor(inputNames, inputAttemps) {
    this.cars = inputNames.split(',').map((name) => name.trim());
    this.attemps = inputAttemps;
    this.location = 0;
  }
}
