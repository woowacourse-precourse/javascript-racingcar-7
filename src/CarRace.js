import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import carHandler from './handler/carHandler.js';
import attemptHandler from './handler/attemptHandler.js';

class CarRace {
  #carArray = [];
  #numOfAttempt;

  async raceStart() {
    await this.getCarArray();
    await this.getNumOfAttempt();
    this.startRace();
    this.getWinner();
  }

  async getCarArray() {
    const data = await Console.readLineAsync(
      '닉네임을 입력해주세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNames = data.split(",");

    carHandler(carNames);

    this.#carArray = carNames.map((name) => {
      return new Car(name);
    });
  }

  async getNumOfAttempt() {
    const dataOfAttempt = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    attemptHandler(dataOfAttempt);
    this.#numOfAttempt = Number(dataOfAttempt);
  }



  startRace() {
    Console.print('\n실행결과');
    while (this.#numOfAttempt) {
      this.#carArray.map((car) => {
        Console.print(`${car.getName()} : ${car.tryToGo()}`);
      });

      this.#numOfAttempt -= 1;
      Console.print('');
    }
  }

  getWinner() {
    let winnerName = [];
    let maxDistance = -1;

    this.#carArray.map((car) => {
      const distance = car.getNumOfGo();

      if (distance > maxDistance) {
        winnerName.splice(0);
        winnerName.push(car.getName());
        maxDistance = distance;
      } else if (distance == maxDistance) {
        winnerName.push(car.getName());
      }
    });

    Console.print(`최종 우승자 : ${winnerName.join(', ')}`);
  }
}

export default CarRace;
