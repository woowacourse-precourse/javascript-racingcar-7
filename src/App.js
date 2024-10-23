import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const INPUT = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const Cars = INPUT.split(',').map((car) => car.trim());

    Console.print(Cars);
  }
}

export default App;
