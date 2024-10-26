import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import CarNameValidations from "../validations/CarNameValidations.js";
import RaceCountValidations from "../validations/RaceCountValidations.js";
import parseStringToArray from "../utils/parseStringToArray.js";
import parseArrayToString from "../utils/parseArrayToString.js";
import Car from "../domain/Car.js";
import getRandomNumber from "../utils/getRandomNumber.js";
import { Console } from "@woowacourse/mission-utils";

class RaceController {
  async start() {
    const carNames = await this.getValidatedCarNames();
    const raceCount = await this.getValidatedRaceCount();

    OutputView.printRaceStartMessage();

    const car = new Car(carNames);
    
    Array.from({ length: raceCount }, () => {
      this.performRaceRound(car, carNames);
      OutputView.printNewLine();
    });

    this.printRaceWinner(car);
  }

  async getValidatedCarNames() {
    const carNamesInput = await InputView.readCarNameInput();
    const carNames = parseStringToArray(carNamesInput);
    CarNameValidations(carNames);
    return carNames;
  }

  async getValidatedRaceCount() {
    const raceCount = await InputView.readRaceCountInput();
    RaceCountValidations(raceCount);
    return raceCount;
  }

  performRaceRound(car, carNames) {
    carNames.forEach((_, carIndex) => {
      const randomNumber = getRandomNumber();
      car.isForwardMovementValid(randomNumber, carIndex);
      OutputView.printRoundResult(car.carNames[carIndex], car.forwardCounts[carIndex]);
    });
  }

  printRaceWinner(car) {
    const winner = parseArrayToString(car.getWinnerList());
    OutputView.printWinner(winner);
  }
}

export default RaceController;
