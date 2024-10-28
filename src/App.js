import { Console, Random } from '@woowacourse/mission-utils';

const CAR_NAME_INPUT_GUIDE = "ex) 'pobi,jun' 같은 형식으로 입력해주세요.";
const GAME_COUNT_INPUT_GUIDE = "ex) '1' 같은 양수 정수로 입력해주세요.";

const throwNewError = (condition, errorMessage) => {
  if (condition) {
    throw new Error(errorMessage);
  }
};

const validateCarNames = (carNames) => {
  const dividerCount = carNames.split('').filter((char) => char === ',').length;
  const carList = carNames.split(',').filter(Boolean);
  throwNewError(
    carNames.trim() === '',
    `[ERROR]빈 문자열은 입력이 불가능합니다. ${CAR_NAME_INPUT_GUIDE}`,
  );
  throwNewError(
    carNames.includes(' '),
    `[ERROR]공백이 포함된 문자열은 입력이 불가능합니다. ${CAR_NAME_INPUT_GUIDE}`,
  );

  throwNewError(
    carList.length === 0,
    `[ERROR]자동차 이름을 1개 이상 입력해주세요. ${CAR_NAME_INPUT_GUIDE}`,
  );

  throwNewError(
    dividerCount !== carList.length - 1,
    `[ERROR]구분자는 자동차 이름 사이에 1개씩만 쓰여야 합니다. ${CAR_NAME_INPUT_GUIDE}`,
  );
  throwNewError(
    carList.some((carName) => carName.length > 5),
    `[ERROR]자동차 이름은 5자 이하만 가능합니다. ${CAR_NAME_INPUT_GUIDE}`,
  );
};

const validateGameCount = (gameCount) => {
  const convertedGameCount = Number(gameCount);

  throwNewError(
    convertedGameCount <= 0,
    `[ERROR]음수 혹은 0은 안됩니다. ${GAME_COUNT_INPUT_GUIDE}`,
  );

  throwNewError(
    !Number.isInteger(convertedGameCount),
    `[ERROR]양수 정수만 가능합니다. ${GAME_COUNT_INPUT_GUIDE}`,
  );
};

class App {
  constructor() {
    this.cars = [];
    this.carDistances = [];
  }

  async run() {
    const carNames = await this.getCarNames();
    const gameCount = await this.getGameCount();
    this.initialize(carNames);

    Console.print('\n실행 결과');

    this.playGames(gameCount);

    this.printWinners();
  }

  async getCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    validateCarNames(carNames);
    return carNames;
  }

  async getGameCount() {
    const gameCount =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    validateGameCount(gameCount);
    return Number(gameCount);
  }

  initialize(carNames) {
    const cars = carNames.split(',');
    this.cars = cars;
    this.carDistances = Array.from({ length: cars.length }, () => '');
  }

  playGames(gameCount) {
    for (let count = 0; count < gameCount; count++) {
      const carsCanMove = Array.from(
        { length: this.cars.length },
        () => Random.pickNumberInRange(0, 9) >= 4,
      );

      this.moveCars(carsCanMove);
      this.printCarDistances();
      Console.print('');
    }
  }

  moveCars(carsCanMove) {
    carsCanMove.forEach((canMove, index) => {
      if (canMove) {
        this.carDistances[index] += '-';
      }
    });
  }

  printCarDistances() {
    this.cars.forEach((car, index) => {
      Console.print(`${car} : ${this.carDistances[index]}`);
    });
  }

  printWinners() {
    const maxDistance = Math.max(
      ...this.carDistances.map((distance) => distance.length),
    );

    const winners = [...this.carDistances.keys()]
      .filter((index) => this.carDistances[index].length === maxDistance)
      .map((index) => this.cars[index]);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
