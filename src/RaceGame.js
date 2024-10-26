import { Console, Random } from '@woowacourse/mission-utils';
import { USER } from './Constants/Message.js';
import { nameValidation, tryCountValidation } from './Validation/Validation.js';
import Car from './Car.js';

class RaceGame {
  constructor() {
    this.carList = [];
    this.tryCount = 0;
  }

  async ready() {
    await this.getUserCarName();
    await this.getUserTryCount();
    this.start();
  }

  async getUserCarName() {
    const inputName = await Console.readLineAsync(USER.INPUT_CAR_NAME);
    nameValidation(inputName);
    this.carList = inputName.split(',').map((name) => new Car(name));
  }

  async getUserTryCount() {
    const inputTryCount = await Console.readLineAsync(USER.INPUT_TRY_COUNT);
    tryCountValidation(inputTryCount);
    this.tryCount = parseInt(inputTryCount, 10);
  }

  start() {
    Console.print(USER.RACE_RESULT_BEFORE_MESSAGE);
    Array.from({ length: this.tryCount }).forEach(() => this.carRacing());
    this.winner();
  }

  carRacing() {
    this.carList.forEach((car) => {
      const record = Random.pickNumberInRange(0, 9);
      car.move(record);
      Console.print(`${car.getName} : ${car.getMoveHistory}`);
    });

    Console.print('');
  }

  winner() {
    const maxMoveLength = Math.max(
      ...this.carList.map((car) => car.getMoveHistory.length),
    );

    const winner = this.carList
      .filter(
        (car) => parseInt(car.getMoveHistory.length, 10) === maxMoveLength,
      )
      .map((car) => car.getName);

    Console.print(`${USER.WINNER_MESSAGE}${winner.join(', ')}`);
  }
}

export default RaceGame;
