import { MissionUtils } from '@woowacourse/mission-utils';
import RacingCar from './RacingCar';
class App {
  async run() {
    const NAMES = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const TIMES = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    if (!Number.isInteger(TIMES) || TIMES <= 0) throw new Error('[Error] 시도할 횟수는 양의 정수만 가능합니다.');

    const splitNames = NAMES.split(',').map(name => name.trim());

    const cars = [];
    for (carName of splitNames) cars.push(new RacingCar(carName));
  }
}

export default App;
