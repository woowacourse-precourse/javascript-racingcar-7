// src/controllers/RacingGameController.js
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Validator from '../validators/Validator.js'; 
import RacingGame from '../models/RacingGame.js';
import { Console, Random } from '@woowacourse/mission-utils';

export default class RacingGameController {
  static async start() {
    try {
      // 자동차 이름 입력 받기
      const carNamesInput = await InputView.getPlayerNames();
      const playerNames = Validator.validateCarNames(carNamesInput);

      // 시도 횟수 입력 받기
      const raceTimeInput = await InputView.getRaceTime();
      const raceTime = Validator.validateRaceTime(raceTimeInput);

      // 참가자 명단 출력
      OutputView.printParticipants(playerNames);

      // 경주 게임 초기화
      const race = new RacingGame(playerNames);

      // 경주 실행 및 결과 출력
      for (let i = 0; i < raceTime; i++) {
        race.runRound(() => Random.pickNumberInRange(0, 9));
        const carsStatus = race.getCarsStatus();
        OutputView.printRaceResult(carsStatus);
      }

      // 최종 우승자 출력
      const winners = race.getWinners();
      OutputView.printWinners(winners);
    } catch (error) {
      OutputView.printError(error.message);
      throw error; // 테스트를 위해 예외를 다시 던짐
    }
  }
}
