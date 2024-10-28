import { Console, Random } from '@woowacourse/mission-utils';
import { validateName, validateTryCount } from './Validation.js';
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from './constants/Message.js';
import { NUMBER } from './constants/MagicNumber.js';

export async function getCarName() {
  const input = await Console.readLineAsync(INPUT_MESSAGE.carName);
  const carNames = input.split(',').map((name) => name.trim());
  validateName(carNames);
  const cars = carNames.map((name) => ({
    name,
    position: NUMBER.startPosition,
  }));
  return cars;
}

export async function getTryCount() {
  const tryCount = await Console.readLineAsync(INPUT_MESSAGE.tryCount);
  validateTryCount(tryCount);
  return Number(tryCount);
}

function getRandomNumber() {
  const randomNumber = Random.pickNumberInRange(
    NUMBER.pickNumberMin,
    NUMBER.pickNumberMax
  );
  return randomNumber;
}

export async function moveCar(cars) {
  for (const car of cars) {
    const randomNumber = await getRandomNumber();
    if (randomNumber >= NUMBER.fowardCondition) {
      car.position += 1;
    }
  }
  return cars;
}

export function printCarPosition(cars) {
  for (const car of cars) {
    Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
  }
  Console.print('');
}

export function printWinner(cars) {
  const winnerPosition = Math.max(...cars.map((car) => car.position));
  const winners = cars
    .filter((car) => car.position === winnerPosition)
    .map((car) => car.name);
  Console.print(`${OUTPUT_MESSAGE.winner}${winners.join(', ')}`);
}
