import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Race from './Race.js';
import InputValidator from './InputValidator.js';

class App {
  async run() {
    const participantInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const participantNames =
      InputValidator.validateParticipantNames(participantInput);
    const cars = participantNames.map((name) => new Car(name));

    const tryCountInput =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const tryCount = InputValidator.validateTryCount(tryCountInput);

    const race = new Race(cars, tryCount);
    race.start();

    const winners = race.getWinners();
    Console.print(`\n최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
