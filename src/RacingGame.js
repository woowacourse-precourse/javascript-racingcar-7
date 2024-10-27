import { Console, Random } from '@woowacourse/mission-utils';

class RacingGame {
  constructor() {
    this.cars = [];
  }

  async play() {
    const line = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const count = await Console.readLineAsync('시도할 회수는 몇회인가요?\n');
    const carNames = line.split(',');
    Console.print(carNames);
    // Console.print(Random.pickNumberInRange(0, 9));
  }
}

export default RacingGame;
