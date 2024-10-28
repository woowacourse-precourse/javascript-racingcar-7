import Parser from "../utils/Parser.js";
import Validator from "../utils/Validator.js";

class GameInitializer {
  constructor(inputView, game) {
    this.inputView = inputView;
    this.game = game;
  }

  async initializeGame() {
    await this.initializeCars();
    const tryCount = await this.initializeTryCount();
    return tryCount;
  }

  // 자동차 이름을 입력받아 게임 시작
  async initializeCars() {
    const namesInput = await this.inputView.inputCarNames();
    const parsedNames = Parser.parseCarNames(namesInput);
    Validator.validateCarNames(parsedNames);
    this.game.createCars(parsedNames);
  }

  // 시도 횟수를 입력받아 게임 시작
  async initializeTryCount() {
    const countInput = await this.inputView.inputTryCount();
    return Validator.validateTryCount(countInput);
  }
}

export default GameInitializer;
