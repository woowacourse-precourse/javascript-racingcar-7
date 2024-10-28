import { Console, Random } from "@woowacourse/mission-utils";

const createCar = (name) => ({
  name,
  position: 0,
  move(number) {
    if (number >= 4) {
      this.position += 1;
    }
  },
  getProgress() {
    return '-'.repeat(this.position);
  }
});

const validateCarNames = (names) => {
  if (names.length <= 1) {
    throw new Error("자동차는 2대 이상이어야 합니다.")
  }
  if (new Set(names).size < names.length) {
    throw new Error("자동차 이름은 중복될 수 없습니다.")
  }
  if (names.some(name => name.length > 5)) {
    throw new Error("자동차 이름은 5자 이하만 가능합니다.");
  }
  if (names.some(name => name.length === 0)) {
    throw new Error("자동차 이름은 1자 이상이어야 합니다.");
  }
  return names;
};

const parseCarNames = (input) => {
  return input.split(',').map(name => name.trim());
};

const parseAttempts = (input) => {
  const ATTEMPTS = Number(input);
  if (isNaN(ATTEMPTS) || ATTEMPTS <= 0) {
    throw new Error("시도 횟수는 1 이상의 숫자여야 합니다.");
  }
  return ATTEMPTS;
};

const getCarNames = async () => {
  const INPUT = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  const NAMES = parseCarNames(INPUT);
  validateCarNames(NAMES);
  return NAMES.map(createCar);
};

const getAttempts = async () => {
  const INPUT = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  return parseAttempts(INPUT);
};

const moveCars = (cars) => {
  return cars.map(car => {
    const NUMBER = Random.pickNumberInRange(0, 9);
    car.move(NUMBER);
    return car;
  });
};

const printRaceStatus = (cars) => {
  cars.forEach(car => {
    Console.print(`${car.name} : ${car.getProgress()}`);
  });
  Console.print("");
};

const race = async (cars, attempts) => {
  Console.print("\n실행 결과");
  
  for (let i = 0; i < attempts; i++) {
    moveCars(cars);
    printRaceStatus(cars);
  }
  
  return cars;
};

const findWinners = (cars) => {
  const MAX_POSITION = Math.max(...cars.map(car => car.position));
  return cars.filter(car => car.position === MAX_POSITION);
};

const announceWinners = (winners) => {
  const WINNER_NAMES = winners.map(car => car.name).join(", ");
  Console.print(`최종 우승자 : ${WINNER_NAMES}`);
};

class App {
  async run() {
    try {
      const CARS = await getCarNames();
      const ATTEMPTS = await getAttempts();
      const RACE_RESULT = await race(CARS, ATTEMPTS);
      const WINNERS = findWinners(RACE_RESULT);
      announceWinners(WINNERS);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default App;