import { MissionUtils } from '@woowacourse/mission-utils';
import { printRaceProgress } from '../views/output.js';
import generateRandomNumber from '../utils/random.js';
import { MOVE_THRESHOLD } from '../constants/numbers.js';

/**
 * 게임을 관리하는 클래스
 *
 * @class Game
 */
export default class Game {
  /**
   * @constructor
   * @param {Car[]} cars - 경주에 참가할 자동차 배열
   * @param {number} rounds - 게임 시도 횟수
   */
  constructor(cars, rounds) {
    this.cars = cars;
    this.rounds = rounds;
  }

  /**
   * 모든 라운드를 진행한다.
   */
  playAllRounds() {
    MissionUtils.Console.print(`\n실행 결과`);

    for (let i = 1; i <= this.rounds; i += 1) {
      this.playSingleRound();
      printRaceProgress(this.cars);
    }
  }

  /**
   * 단일 라운드를 진행한다.
   */
  playSingleRound() {
    this.cars.forEach((car) => this.attemptMove(car));
  }

  /**
   * 자동차를 이동할지 시도한다.
   *
   * @param {Car} car - 이동할 자동차
   */
  // eslint-disable-next-line class-methods-use-this
  attemptMove(car) {
    const randomNumber = generateRandomNumber();

    if (randomNumber >= MOVE_THRESHOLD) {
      car.move();
    }
  }

  /**
   * 우승자들을 반환한다.
   *
   * @returns {Car[]} 우승한 자동차 배열
   */
  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));

    return this.cars.filter((car) => car.getPosition() === maxPosition);
  }
}
