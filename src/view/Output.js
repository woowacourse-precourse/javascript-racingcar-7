import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_TITLE, TRACK_LINE } from './Output.constant';

class Output {
  /**
   * @returns {void}
   */
  static printTitle() {
    Console.print('\n' + OUTPUT_TITLE);
  }

  /**
   * @param {string} name
   * @param {number} track
   * @returns {string}
   */
  static getRacingTrack(name, track) {
    return `${name} : ${TRACK_LINE.repeat(track)}`;
  }

  /**
   * @param {Array<{ name: string; track: number; }[]>} racingResult
   * @returns {void}
   */
  static printRacingResult(racingResult) {
    const result = racingResult
      .map((round) => {
        return round
          .map((car) => this.getRacingTrack(car.name, car.track))
          .join('\n');
      })
      .join('\n\n');

    Console.print(result + '\n');
  }

  /**
   * @param {string[]} winner
   * @returns {void}
   */
  static printWinner(winner) {
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}

export default Output;
