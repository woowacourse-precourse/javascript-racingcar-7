import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const carNamesInput = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      this.validateInput(carNamesInput);
      const carNames = this.splitCarNames(carNamesInput);
      this.validateCarNames(carNames);

      const attempts = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
      );

      const cars = carNames.map((name) => ({ name, position: 0 }));
      this.runRace(cars, attempts);
      this.printWinners(cars);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  validateInput(carNamesInput) {
    if (carNamesInput === '') {
      throw new Error('[ERROR] 입력된 값이 없습니다.');
    }
    if (carNamesInput === ',') {
      throw new Error('[ERROR] 이름을 필수로 입력해야 합니다.');
    }
  }

  splitCarNames(carNamesInput) {
    return carNamesInput.split(',');
  }

  validateCarNames(carNames) {
    const carNameSet = new Set(carNames);
    if (carNameSet.size !== carNames.length) {
      throw new Error('[ERROR] 중복된 이름이 존재합니다.');
    }

    carNames.forEach((car) => {
      if (car.includes(' ')) {
        throw new Error('[ERROR] 공백은 입력할 수 없습니다.');
      }
      if (car.length > 5) {
        throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
      }
      if (car === '') {
        throw new Error('[ERROR] 쉼표 다음에 반드시 이름을 입력해야 합니다.');
      }
    });
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

  printWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === maxPosition);
    const winnerNames = winners.map((car) => car.name).join(', ');
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default App;
