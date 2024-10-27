import { Console } from '@woowacourse/mission-utils';

class RacingCar {
  static instance = null;
  #turn;
  #players;
  #maxLength;

  constructor(turn = null) {
    if (RacingCar.instance !== null) {
      return RacingCar.instance;
    }
    this.#turn = turn;
    this.#players = [];
    this.board = {};
    this.#maxLength = 0;
  }

  join(player) {
    this.#players.push(player);
    this.board[player.name] = '';
  }

  start() {
    Console.print('실행결과');
    for (let t = 0; t < this.#turn; t++) {
      this.#players.forEach((player) => {
        player.roll();
        Console.print(`${player.name} : ${this.board[player.name]}`);
        this.#maxLength = Math.max(this.#maxLength, this.board[player.name].length);
      });
      Console.print('');
    }
    this.#finish();
  }

  #finish() {
    const playerNames = Object.keys(this.board);
    const winner = playerNames.filter((player) => this.board[player].length === this.#maxLength);
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}

export default RacingCar;
