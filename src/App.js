import { Console } from "@woowacourse/mission-utils";
import CarRace from "./domains/carRace.js";
import { DEFAULT_ERROR } from "./constants/messages.js";
import { input } from "./view/input.js";
import splitByComma from "./utils/splitByComma.js";
import Car from "./domains/car.js";
import car from "./validators/car.js";

class App {
  #carInstance;
  #carRace;
  // #winner;
  // #tryCount;
  constructor() {
    this.#carRace = null;
    this.#carInstance = [];
    // this.#winner = [];
    // this.#tryCount = 0;
  }

  async run() {
    try {
      await this.#carNameStage();
      // output.winner(winner);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async #carNameStage() {
    try {
      await this.inputCarName();
      this.#carRace = new CarRace(this.#carInstance);
    } catch (error) {
      throw error;
    }
  }

  async init() {
    try {
      await this.#carNameStage();
    } catch (error) {
      throw error;
    }
  }

  async inputCarName() {
    try {
      const carNamesInput = await input.carName();
      const carNamesSplitByComma = splitByComma(carNamesInput);
      car.nameValidator(carNamesSplitByComma);
      this.#carInstance = this.#makeCarInstance(carNamesSplitByComma);
    } catch (error) {
      throw error;
    }
  }

  #makeCarInstance(carNames) {
    return carNames.map((carName) => new Car(carName));
  }
}

export default App;
