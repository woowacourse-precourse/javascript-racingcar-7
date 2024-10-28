import { Console } from '@woowacourse/mission-utils';
import { Car } from '../model/Car.js';
import { Race } from '../model/Race.js';
import { View } from '../view/View.js';

export class Controller {
  constructor() {
    this.view = new View();
    this.race = new Race();
  }

  async start() {
    const carNames = await this.view.promptCarNames();
    this.validateCarNames(carNames);

    carNames.forEach((name) => {
      this.race.addCar(new Car(name));
    });

    const attempt = await this.view.promptAttempt();
    this.validateAttempt(attempt);

    Console.print('실행결과');
    for (let i = 0; i < attempt; i++) {
      this.race.play();
      this.view.displayCurrentPosition(this.race.getCars());
    }

    const winners = this.race.getWinner();
    this.view.displayWinners(winners);
  }

  validateCarNames(carNames) {
    const nameSet = new Set();

    carNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.');
      }
      if (name.length === 0) {
        throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
      }
      if (nameSet.has(name)) {
        throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
      }
      nameSet.add(name);
    });
  }

  validateAttempt(attempt) {
    if (isNaN(attempt)) {
      throw new Error('[ERROR] 시도할 횟수는 숫자이어야 합니다.');
    }
    if (attempt <= 0) {
      throw new Error('[ERROR] 시도할 횟수는 양수이어야 합니다.');
    }
  }
}

export default Controller;
