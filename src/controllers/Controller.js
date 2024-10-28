// src/controllers/Controller.js

import { InputView, OutputView } from '../views/index.js';
import {
  isEmptyStringIncluded,
  isPositiveInteger,
  isValidCarName,
  isValidGameAttempts,
  isValidParticipantAmount,
} from '../validations/InputValidation.js';
import Car from '../models/Car.js';
import RaceGame from '../models/RaceGame.js';

export default class Controller {
  constructor() {
    this.cars = [];
    this.gameAttempts = 0;
    this.raceGame = null;
  }

  async run() {
    try {
      await this.inputParticipants();
      await this.inputGameAttempts();
      this.startRace();
      this.showResult();
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }

  async inputParticipants() {
    const input = await InputView.readInput(
      '참가자 이름을 입력해주세요 (이름은 쉼표(,) 기준으로 구분): ',
    );
    isEmptyStringIncluded(input);
    isValidParticipantAmount(input);

    const names = input.split(',');
    names.forEach((name) => {
      isValidCarName(name);
    });

    this.cars = names.map((name) => new Car(name));
  }

  async inputGameAttempts() {
    const input = await InputView.readInput('시도할 횟수를 입력해주세요: ');
    isEmptyStringIncluded(input);
    isPositiveInteger(input);
    isValidGameAttempts(Number(input));

    this.gameAttempts = Number(input);
  }

  startRace() {
    this.raceGame = new RaceGame(this.cars, this.gameAttempts);
    OutputView.printResult('\n실행 결과');

    for (let round = 0; round < this.gameAttempts; round++) {
      this.raceGame.participants.forEach((car) => {
        car.updateDistance();
        const progress = '-'.repeat(car.getDistance());
        OutputView.printResult(`${car.name} : ${progress}`);
      });
      OutputView.printResult('');
    }
  }

  showResult() {
    const winners = this.raceGame.getWinners();
    const winnerNames = winners.map((car) => car.name).join(', ');
    OutputView.printResult(`최종 우승자 : ${winnerNames}`);
  }
}
