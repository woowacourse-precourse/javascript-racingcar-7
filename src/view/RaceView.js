import { Console } from '@woowacourse/mission-utils';

class RaceView {
  async getCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    return input.split(',').map((name) => name.trim());
  }

  async getAttemptCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return input;
  }

  printRaceStatus(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${'-'.repeat(car.distance)}`);
    });
    Console.print(' ');
  }

  printWinner(winner) {
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}
export default RaceView;
