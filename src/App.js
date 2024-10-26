import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    const { carNames, attemptCount } = await this.getUserInput();
    Console.print('\n실행결과');
    const resultBoard = this.startRace(carNames, attemptCount);
    this.printWinner(carNames, resultBoard);
  }

  async getUserInput() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,)로 구분): ',
    );
    const attemptCountInput =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?: ');

    const carNames = this.validateCarNames(carNamesInput);
    const attemptCount = this.validateAttemptCount(attemptCountInput);

    return { carNames, attemptCount };
  }

  validateCarNames(input) {
    const carNames = input.split(',').map((name) => name.trim());

    carNames.forEach((name) => {
      if (name.length > 5) {
        const errorMessage = '[ERROR] 자동차 이름은 5자 이하여야 합니다.';
        Console.print(errorMessage);
        throw new Error(errorMessage);
      }
    });

    return carNames;
  }

  validateAttemptCount(input) {
    const attemptCount = parseInt(input, 10);

    if (Number.isNaN(attemptCount)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }

    if (attemptCount <= 0) {
      throw new Error('[ERROR] 시도 횟수는 0보다 커야 합니다.');
    }

    return attemptCount;
  }

  startRace(carNames, attemptCount) {
    let carMovementTracker = {};
    carNames.forEach((carName) => {
      carMovementTracker[carName] = 0;
    });

    for (let i = 0; i < attemptCount; i++) {
      carMovementTracker = this.moveCars(carNames, carMovementTracker);
    }

    return carMovementTracker;
  }

  moveCars(carNames, prevMovement) {
    const carMovementTracker = { ...prevMovement };
    carNames.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        carMovementTracker[car] += 1;
      }
    });
    this.printCurrentStatus(carNames, carMovementTracker);
    return carMovementTracker;
  }

  printCurrentStatus(carNames, carMovementTracker) {
    carNames.forEach((carName) => {
      const moveCount = carMovementTracker[carName];
      Console.print(`${carName}: ${'-'.repeat(moveCount)}`);
    });
    Console.print('');
  }

  printWinner(carNames, resultBoard) {
    const winner = [];
    const maxCount = Math.max(...Object.values(resultBoard));

    carNames.forEach((carName) => {
      if (resultBoard[carName] === maxCount) {
        winner.push(carName);
      }
    });

    Console.print(`최종 우승자: ${winner.join(', ')}`);
  }
}

export default App;
