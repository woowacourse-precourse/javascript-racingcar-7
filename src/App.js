import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNames = this.splitCarNames(carNamesInput);

    const attempts = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    const cars = carNames.map((name) => ({ name, position: 0 }));
    this.runRace(cars, attempts);
  }

  splitCarNames(carNamesInput) {
    return carNamesInput.split(',');
  }

  runRace(cars, attempts) {
    for (let attempt = 0; attempt < attempts; attempt++) {
      this.updateCarPositions(cars);
      this.printRaceStatus(cars);
    }
  }

  updateCarPositions(cars) {
    cars.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        car.position += 1;
      }
    });
  }

  printRaceStatus(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    Console.print('');
  }
}

export default App;
