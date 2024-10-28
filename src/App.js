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
  const attempts = Number(input);
  if (isNaN(attempts) || attempts <= 0) {
    throw new Error("시도 횟수는 1 이상의 숫자여야 합니다.");
  }
  return attempts;
};

const getCarNames = async () => {
  const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  const names = parseCarNames(input);
  validateCarNames(names);
  return names.map(createCar);
};

const getAttempts = async () => {
  const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  return parseAttempts(input);
};

class App {
  async run() {
    try {
      const cars = await getCarNames();
      const attempts = await getAttempts();
      // 향후 구현
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
