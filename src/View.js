import { Console } from '@woowacourse/mission-utils';

class View {
  async getCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    return carNames;
  }

  async getNumber() {
    const number = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return number;
  }

  printRaceStatus(carMap) {
    carMap.forEach((position, name) => {
      Console.print(`${name} : ${position}`);
    });
    Console.print('\n');
  }

  printWinner(winner) {
    Console.print(`최종 우승자 : ${winner}`);
  }

  printMessage(message) {
    Console.print(message);
  }
}

export default View;
