import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import CarNameValidations from "../validations/CarNameValidations.js";
import RaceCountValidations from "../validations/RaceCountValidations.js";
import parseCarNames from "../helpers/parseCarNames.js";
import Car from "../domain/Car.js";
import getRandomNumber from "../utils/getRandomNumber.js";
import { Console } from "@woowacourse/mission-utils";


// TODO: 컨트롤러 로직 별로 분리
class RaceController {
  async start() {
    const carNamesInput = await InputView.readCarNameInput();
    const carNames = parseCarNames(carNamesInput);
    CarNameValidations(carNames);

    const raceCount = await InputView.readRaceCountInput();
    RaceCountValidations(raceCount);

    OutputView.printRaceStartMessage();

    const car = new Car(carNames);
    for (let cnt = 0; cnt < raceCount; cnt++) {
      for (let carIndex = 0; carIndex < carNames.length; carIndex++) {
        const randomNumber = getRandomNumber();
        car.isForwardMovementValid(randomNumber, carIndex);
      }
      for (let carIndex = 0; carIndex < carNames.length; carIndex++) {
        OutputView.printRoundResult(car.carNames[carIndex], car.forwardCounts[carIndex]);
      }
      Console.print('');
    }

    const winner = car.getWinnerList().join(', ');
    OutputView.printWinner(winner);
  }
}

export default RaceController;