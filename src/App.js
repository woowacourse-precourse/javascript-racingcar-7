import { Console } from '@woowacourse/mission-utils';
import RacingCar from './Models/RacingCar.js';

class App {
  async run() {
    // 자동차 이름 받기
    const userInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    // 자동차 이름 분리
    const carNameArr = userInput.split(',');

    // 자동차 인스턴스 생성
    const carInstanceArr = carNameArr.map((name) => new RacingCar(name));

    // 시도 횟수 받기
    const tryCount =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }
}

export default App;
