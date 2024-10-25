import { Console } from '@woowacourse/mission-utils';

class Output {
  static OUTPUT_TITLE = '실행 결과';
  static TRACK_LINE = '-';

  /**
   * @returns {void}
   */
  static printTitle() {
    Console.print('\n' + this.OUTPUT_TITLE);
  }

  /**
   * @param {string} name
   * @param {number} track
   * @returns {string}
   */
  static getRacingTrack(name, track) {
    return `${name} : ${this.TRACK_LINE.repeat(track)}`;
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
