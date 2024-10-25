import { Console, Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  getName() {
    return this.name;
  }

  forwardOrNot() {
    let num = Random.pickNumberInRange(0, 9);
    if (num >= 4) this.moveCount++;
  }

  getProgress() {
    Console.print(`${this.name} : ${'-'.repeat(this.moveCount)}`);
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
    const cars = names.map((name) => {
      return new Car(name);
    });

    Console.print('\n실행 결과');

    for (let i = 0; i < trial; i++) {
      cars.forEach((car) => {
        car.forwardOrNot();
        car.getProgress();
      });
      Console.print('');
    }
  }
}

export default App;
