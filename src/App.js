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

  getCount() {
    return this.moveCount;
  }
}

function getNames(str) {
  const names = str.split(',');
  return names;
}

function checkNameInput(arr) {
  arr.forEach((name) => {
    if (name.length > 5 || name.length < 1) {
      throw new Error(
        '[ERROR] 이름은 최소 1자 이상, 최대 5자 이하여야 합니다.'
      );
    }
  });
  if (arr.length < 2) {
    throw new Error(
      '[ERROR] 자동차 경주에는 최소 2명 이상의 인원이 필요합니다.'
    );
  }
}

function checkCount(input) {
  if (isNaN(input)) {
    throw new Error('[ERROR]');
  } else {
    if (Number(input) % 1 === 0) return Number(input);
    else throw new Error('[ERROR]');
  }
}

function whoIsWinner(cars) {
  let arr = [...cars];

  let countArr = arr.map((car) => {
    return car.getCount();
  });

  let max = 0;
  countArr.forEach((e) => {
    if (e >= max) max = e;
  });

  let winners = arr.filter((e) => {
    return e.getCount() === max;
  });

  let winnerNames = winners.map((e) => {
    return e.getName();
  });

  Console.print(`최종 우승자 : ${winnerNames.join(', ')}`);
}

class App {
  async run() {
    const inputNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const names = getNames(inputNames);
    checkNameInput(names);

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

    whoIsWinner(cars);
  }
}
export default App;
