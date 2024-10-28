import { Console } from '@woowacourse/mission-utils';

export class View {
  async promptCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return input.split(',').map((name) => name.trim());
  }

  async promptAttempt() {
    const attempt = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    return attempt;
  }

  displayCurrentPosition(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()}: ${'-'.repeat(car.getPosition())}`);
    });
    Console.print('\n');
  }

  displayWinners(winners) {
    Console.print(`최종 우승자 : ${winners}`);
  }
}
