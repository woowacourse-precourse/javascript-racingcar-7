import { getCarNames } from './CarNameInput.js';
import { getMoveCount } from './MoveCountInput.js';
import { getRandomeNumber } from './Utilities.js';
import { printRaceStatus } from './RaceStatusPrinter.js'
import { printRaceResult } from './ResultHandler.js'
import { Console } from '@woowacourse/mission-utils';

export async function startRace() {
  const carNames = await getCarNames();
  const moveCount = await getMoveCount();

  const cars = carNames.map((name) => ({
    name: name.trim(),
    position: 0
  }));

  Console.print('\n실행 결과')
  for (let i = 0; i < moveCount; i++) {
    cars.forEach((car) => {
      if (getRandomeNumber(0, 9) >= 4) {
        car.position += 1;
      }
    });
    printRaceStatus(cars);
  }

  printRaceResult(cars);
}