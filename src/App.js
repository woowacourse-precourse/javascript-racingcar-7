import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.cars = [];
    this.moveCount = 0;
  }

  async run() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

    const carNames = await this.getCarNames();
    this.createCarObejct(carNames);

    await this.getMoveCount();

    this.startRace();
  }

  async getCarNames() {
    const namesInput = await Console.readLineAsync('');

    const nameList = namesInput.split(',').map((name) => name.trim());

    if (nameList.some((name) => name.length > 5 || name === '')) {
      this.onError();
    }

    return nameList;
  }

  createCarObejct(names) {
    this.cars = names.map((name) => ({ name, position: 0 }));
  }


  async getMoveCount() {
    Console.print('시도할 횟수는 몇 회인가요?');

    const moveCountInput = await Console.readLineAsync('');
    const moveCount = parseInt(moveCountInput, 10);

    if (isNaN(moveCount) || moveCount <= 0) {
      this.onError();
    }

    this.moveCount = moveCount;
  }


  startRace() {
    Console.print('\n실행결과');

    for (let i = 0; i < this.moveCount; i++) {
      this.cars.forEach((car) => {

        if (Random.pickNumberInRange(0, 9) >= 4) {
          car.position += 1;
        }
      });

      this.carMoveState();
    }
  }

  carMoveState() {
    this.cars.forEach((car) => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    Console.print('');
  }


  onError() {
    throw new Error('[ERROR]');
  }
}

export default App;
