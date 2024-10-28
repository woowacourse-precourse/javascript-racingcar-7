import { OutputView } from '../views/index.js';
import {
  validateParticipants,
  validateGameAttempts,
} from '../validations/InputValidation.js';

export default class GameService {
  constructor(raceGame) {
    this.raceGame = raceGame;
  }

  startRace() {
    const names = this.raceGame.participants.map((car) => car.name);
    validateParticipants(names);
    validateGameAttempts(this.raceGame.gameAttempts);

    OutputView.printResult('\n실행 결과');

    for (let round = 0; round < this.raceGame.gameAttempts; round++) {
      this.raceGame.participants.forEach((car) => {
        car.updateDistance();
        const progress = '-'.repeat(car.getDistance());
        OutputView.printResult(`${car.name} : ${progress}`);
      });
      OutputView.printResult('');
    }
  }
  showResult() {
    const winners = this.raceGame.getWinners();
    const winnerNames = winners.map((car) => car.name).join(', ');
    OutputView.printResult(`최종 우승자 : ${winnerNames}`);
  }
}
