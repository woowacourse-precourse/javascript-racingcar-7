import { Console } from '@woowacourse/mission-utils';
import { inputCarNames, inputTryCount } from './input.js';
import { printExecutionResult, printWinner } from './output.js';
import { validateCarName, validateTryCount } from './validation.js';
import { Car } from './car.js';

export async function carRacingProceed() {
  const carList = [];

  await creatCarList(carList);
  await runCarRacing(carList);

  const maxMoveNum = Math.max(...carList.map((car) => car.number));
  printWinner(carList, maxMoveNum);
}

async function creatCarList(carList) {
  const carNameList = await inputCarNames();
  validateCarName(carNameList);

  for (const carName of carNameList) {
    const car = new Car(carName, 0);
    carList.push(car);
  }
}

async function runCarRacing(carList) {
  const tryCount = await inputTryCount();
  validateTryCount(tryCount);

  Console.print('\n실행 결과');

  for (let i = 0; i < tryCount; i++) {
    carList.forEach((car) => car.move());
    printExecutionResult(carList);
  }
}
