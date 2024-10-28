import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Race from './Race.js';
import InputValidator from './InputValidator.js';
import { SYSTEM_MESSAGES } from './constants/messages.js';

class App {
  async run() {
    const participantInput = await Console.readLineAsync(
      SYSTEM_MESSAGES.INPUT_CAR_NAME,
    );
    const participantNames =
      InputValidator.validateParticipantNames(participantInput);
    const cars = participantNames.map((name) => new Car(name));

    const tryCountInput = await Console.readLineAsync(
      SYSTEM_MESSAGES.INPUT_TRY_COUNT,
    );
    const tryCount = InputValidator.validateTryCount(tryCountInput);

    const race = new Race(cars, tryCount);
    race.start();

    const winners = race.getWinners();
    Console.print(`${SYSTEM_MESSAGES.PRINT_WINNER} ${winners.join(', ')}`);
  }
}

export default App;
