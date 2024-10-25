import { Console, Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  getName() {
    return this.name;
  }
}

function getNames(str) {
  const names = str.split(',');
  return names;
}

function checkNames(arr) {
  let isError = false;
  arr.forEach((name) => {
    if (name.length > 5 || name.length < 1) {
      isError = true;
    }
  });
  if (arr.length < 2) {
    isError = true;
  }
  if (isError) throw new Error('[ERROR]');
}

function checkCount(input) {
  if (isNaN(input)) {
    throw new Error('[ERROR]');
  } else {
    if (Number(input) % 1 === 0) return Number(input);
    else throw new Error('[ERROR]');
  }
}

class App {
  async run() {
    const inputNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const names = getNames(inputNames);
    checkNames(names);

    const inputCount = await Console.readLineAsync(
      `시도할 횟수는 몇 회인가요?\n`
    );
    const trial = checkCount(inputCount);

    //TODO: 정상적인 입력 시 수행할 것 (자동차 배열 만들기)
    const cars = names.map((name, i) => {
      return new Car(name);
    });
  }
}

export default App;
