import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../models/Car.js';
import Game from '../models/Game.js';
import { validateRoundCount } from '../validators/validator.js';
import { printResult } from '../views/output.js';
import prepareCarNames from './carContoller.js';
import { getCarNamesInput, getRoundCount } from './inputController.js';

export default async function startGame() {
  const carNamesInput = await getCarNamesInput();
  const carNames = prepareCarNames(carNamesInput);

  const roundCountInput = await getRoundCount();
  const roundCount = validateRoundCount(roundCountInput);

  const cars = carNames.map((name) => new Car(name));
  const game = new Game(cars, roundCount);

  MissionUtils.Console.print(`\n실행 결과`);

  game.playAllRounds();

  const winners = game
    .getWinners()
    .map((car) => car.getCarName())
    .sort();
  printResult(winners);
}
