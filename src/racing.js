import { Console } from '@woowacourse/mission-utils';
import { isMoveForward } from './random.js';
import { input } from './input.js';
import { printProgress, printResult } from './output.js';

function parseStringToObject(validCars) {
  const carsArray = validCars.split(',');

  return carsArray.map((car) => ({ name: car, distance: 0 }));
}

function moveCars(carsObject) {
  return carsObject.map((car) => {
    if (isMoveForward()) {
      return { ...car, distance: car.distance + 1 };
    }

    return car;
  });
}

export async function racingCars() {
  const { cars, count } = await input();
  let carsObject = parseStringToObject(cars);

  Console.print('실행결과');
  for (let i = 0; i < count; i++) {
    carsObject = moveCars(carsObject);
    printProgress(carsObject);
    Console.print('\n');
  }

  printResult(carsObject);
}
