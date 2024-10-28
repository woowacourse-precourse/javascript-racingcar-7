import { Console } from '@woowacourse/mission-utils';
import { Car } from './model/Car.js';
import { Race } from './model/Race.js';
import { View } from './view/view.js';

class App {
  async run() {
    const view = new View();
    const race = new Race();

    const carNames = await view.promptCarNames();
    const nameSet = new Set();

    carNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.');
      }
      if (name.length === 0) {
        throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
      }
      if (nameSet.has(name)) {
        throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
      }

      nameSet.add(name);
      race.addCar(new Car(name));
    });

    const attempt = await view.promptAttempt();
    if (isNaN(attempt)) {
      throw new Error('[ERROR] 시도할 횟수는 숫자이어야 합니다.');
    }
    if (attempt <= 0) {
      throw new Error('[ERROR] 시도할 횟수는 양수이어야 합니다.');
    }

    Console.print('실행결과\n');
    for (let i = 0; i < attempt; i++) {
      race.play();
      view.displayCurrentPosition(race.getCars());
    }

    const winners = race.getWinner();
    view.displayWinners(winners);
  }
}

export default App;
