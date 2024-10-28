import { Console, Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.validateName(name);
    this.name = name;
    this.position = '';
  }

  validateName(name) {
    if (name.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하이어야 합니다.');
    }
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position += '-';
    }
  }

  getStatus() {
    return `${this.name} : ${this.position}`;
  }

  getPositionLength() {
    return this.position.length;
  }
}

class Race {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  start() {
    Console.print('\n실행 결과');
    for (let i = 0; i < this.tryCount; i++) {
      this.cars.forEach((car) => {
        car.move();
        Console.print(car.getStatus());
      });
      Console.print('');
    }
  }

  getWinners() {
    const maxPosition = Math.max(
      ...this.cars.map((car) => car.getPositionLength()),
    );
    return this.cars
      .filter((car) => car.getPositionLength() === maxPosition)
      .map((car) => car.name);
  }
}

class InputValidator {
  static validateParticipantNames(input) {
    if (!input.includes(',')) {
      throw new Error('[ERROR] 참가자는 두명 이상이어야합니다.');
    }
    if (input[0] === ',' || input.at(-1) === ',') {
      throw new Error('[ERROR] 쉼표(,)는 맨 앞, 혹은 맨 뒤에 올 수 없습니다.');
    }

    input.split('').forEach((char) => {
      if (
        !(
          (char >= '0' && char <= '9') ||
          (char >= 'A' && char <= 'Z') ||
          (char >= 'a' && char <= 'z') ||
          char === ','
        )
      ) {
        throw new Error(
          '[ERROR] 경주할 자동차 이름 입력 시 숫자, 영어, 쉼표 이외의 문자는 입력할 수 없습니다.',
        );
      }
    });

    const names = input.split(',');
    if (names.length !== new Set(names).size) {
      throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
    }

    return names;
  }

  static validateTryCount(input) {
    const tryCount = Number(input);
    if (!Number.isInteger(tryCount) || tryCount <= 0) {
      throw new Error('[ERROR] 시도할 횟수는 자연수만 입력해야 합니다.');
    }
    return tryCount;
  }
}

class App {
  async run() {
    const participantInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const participantNames =
      InputValidator.validateParticipantNames(participantInput);
    const cars = participantNames.map((name) => new Car(name));

    const tryCountInput =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const tryCount = InputValidator.validateTryCount(tryCountInput);

    const race = new Race(cars, tryCount);
    race.start();

    const winners = race.getWinners();
    Console.print(`\n최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
