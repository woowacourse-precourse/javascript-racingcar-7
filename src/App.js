import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './car/Car.js';
import Race from './race/Race.js';
import parseCarString from './inputHandler.js';

class App {
  async run() {
    const carInput = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const moveInput =
      await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    if (moveInput <= 0) {
      throw new Error('[ERROR] 1 보다 큰 수를 입력해주세요');
    }
    const parsedCars = parseCarString(carInput);
    const raceCars = [];
    for (let i = 0; i < parsedCars.length; i += 1) {
      const car = new Car(parsedCars[i]);
      raceCars.push(car);
    }
    const race = new Race(raceCars, moveInput);

    MissionUtils.Console.print('실행결과');
    for (let i = 0; i < moveInput; i += 1) {
      race.moveCars();
    }
    race.printWinner();
  }
}

export default App;
