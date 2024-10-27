import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Validation from './Validation.js';

async function getNameInput() {
  const input = Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  return input;
}

async function getNames(str) {
  const names = str.split(',');
  return names;
}

async function getTrial() {
  const num = Console.readLineAsync(`시도할 횟수는 몇 회인가요?\n`);
  return num;
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

function getCars(names) {
  const cars = names.map((name) => {
    return new Car(name);
  });
  return cars;
}

function race(trial, cars) {
  for (let i = 0; i < trial; i++) {
    cars.forEach((car) => {
      car.forwardOrNot();
      car.getProgress();
    });
    Console.print('');
  }
  return cars;
}

class App {
  async run() {
    const inputNames = await getNameInput();
    const names = await getNames(inputNames);
    Validation.checkNameInput(names);

    const trial = Number(await getTrial());
    Validation.checkCountInput(trial);

    const cars = getCars(names);

    Console.print('\n실행 결과');

    race(trial, cars);

    whoIsWinner(cars);
  }
}
export default App;
