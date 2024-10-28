import { InputView } from '../views/InputView.js';
import Car from '../models/Car.js';
import {
  validateInputStrings,
  validateGameAttempts,
  validateParticipants,
} from '../validations/InputValidation.js';

export default class InputHandler {
  static async getParticipants() {
    const inputStrings = await InputView.readInput(
      '참가자 이름을 입력해주세요 (이름은 쉼표(,) 기준으로 구분): ',
    );
    validateInputStrings(inputStrings);
    const names = inputStrings.split(',');
    validateParticipants(names);
    return names.map((name) => new Car(name));
  }

  static async getGameAttempts() {
    const input = await InputView.readInput('시도할 횟수를 입력해주세요: ');
    validateGameAttempts(input);
    return Number(input);
  }
}
