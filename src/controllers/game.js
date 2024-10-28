import Car from '../models/Car.js';
import Game from '../models/Game.js';
import { printResult } from '../views/output.js';

/**
 * 게임을 시작하고 결과를 출력한다.
 *
 * @function startGame
 * @param {string[]} carNames - 경주에 참가할 자동차 이름 배열
 * @param {number} roundCount - 게임 시도 횟수
 */
export default async function startGame(carNames, roundCount) {
  const cars = carNames.map((name) => new Car(name));
  const game = new Game(cars, roundCount);

  game.playAllRounds();

  const winners = game.getWinners();

  printResult(winners);
}
