import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../models/Car.js';
import Game from '../models/Game.js';
import { validateRoundCount } from '../validators/validator.js';
import printRaceProgress from '../views/raceProgress.js';
import printResult from '../views/result.js';
import prepareCarNames from './carContoller.js';
import { getCarNamesInput, getRoundCount } from './inputController.js';

export default async function startGame() {
  const carNamesInput = await getCarNamesInput();
  const carNames = prepareCarNames(carNamesInput);

  const roundCountInput = await getRoundCount();
  const roundCount = validateRoundCount(roundCountInput);

  const cars = carNames.map((name) => new Car(name));
  const game = new Game(cars, roundCount);

  MissionUtils.Console.print(`실행 결과`);
  for (let i = 1; i <= roundCount; i += 1) {
    game.playRound();
    printRaceProgress(cars);
  }

  const winners = game.getWinners().sort();
  printResult(winners);
}
