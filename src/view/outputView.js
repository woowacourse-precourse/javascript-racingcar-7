//@ts-check
import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/messages.js';

const outputView = {
  /**@param {string} message  */
  printMessage(message) {
    Console.print(message);
  },

  /**
   * @typedef {Object} Car
   * @property {string} name
   * @property {number} position
   */

  /**@param {Car[]} cars  */
  printRaceStatus(cars) {
    cars.forEach((car) => {
      this.printMessage(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    this.printMessage(''); //줄바꿈
  },

  /**@param {Car[]} winners  */
  announceWinner(winners) {
    const winnersName = winners.map((winner) => winner.name).join(', ');
    this.printMessage(`${GAME_MESSAGE.FINAL_WINNER} ${winnersName}`);
  },
};
export default outputView;
