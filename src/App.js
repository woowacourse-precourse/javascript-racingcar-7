import { MissionUtils } from '@woowacourse/mission-utils';
import {
  getUserCarName,
  getUserRacingNum,
  printRacingState,
  printRacingWinner,
} from './views/View.js';
import {
  divisionCarName,
  createCarObject,
  shouldMoveForward,
  getCarPositionsRepresentation,
  findWinners,
} from './models/Model.js';
import { validateCarNames } from './models/ErrorHandler.js';

class App {
  async run() {
    try {
      const userInputCar = await getUserCarName();
      const carNames = divisionCarName(userInputCar.toString());

      validateCarNames(carNames);
      const userInputRacingNum = parseInt(await getUserRacingNum(), 10);
      const initialCarData = createCarObject(carNames);

      MissionUtils.Console.print(`\n실행 결과`);

      const finalCarData = Array.from({ length: userInputRacingNum }).reduce(
        (acc) => {
          const updatedCarData = shouldMoveForward(acc);
          const carPositionsRepresentation =
            getCarPositionsRepresentation(updatedCarData);
          printRacingState(carPositionsRepresentation); // 상태 출력
          return updatedCarData; // 다음 반복에 누적된 값 사용
        },
        initialCarData,
      );

      const winnerName = findWinners(finalCarData);
      return printRacingWinner(winnerName);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error; // 에러를 다시 던져서 애플리케이션이 종료되도록 함
    }
  }
}

export default App;
