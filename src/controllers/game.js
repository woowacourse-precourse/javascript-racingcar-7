import Car from '../models/Car.js';
import Game from '../models/Game.js';
import { printResult } from '../views/output.js';

export default async function startGame(carNames, roundCount) {
  const cars = carNames.map((name) => new Car(name));
  const game = new Game(cars, roundCount);

  game.playAllRounds();

  const winners = game
    .getWinners()
    .map((car) => car.getCarName())
    .sort();

  printResult(winners);
}
