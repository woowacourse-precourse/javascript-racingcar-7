import { Console } from "@woowacourse/mission-utils";
import CarRace from "./domains/carRace.js";
import { input } from "./view/input.js";
import splitByComma from "./utils/splitByComma.js";
import Car from "./domains/car.js";
import car from "./validators/car.js";
import carRace from "./validators/carRace.js";
import output from "./view/output.js";

class App {
  #carInstance;
  #carRace;
  #winner;
  #tryCount;
  constructor() {
    this.#carRace = null;
    this.#carInstance = [];
    this.#winner = [];
    this.#tryCount = 0;
  }

  async run() {
    try {
      await this.init();
      this.#printRaceResult();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async init() {
    try {
      await this.#inputCarName();
      await this.#inputTryCount();
      this.#raceResultStage();
    } catch (error) {
      throw error;
    }
  }

  async #inputCarName() {
    try {
      const carNamesInput = await input.carName();
      const carNamesSplitByComma = splitByComma(carNamesInput);
      car.nameValidator(carNamesSplitByComma);
      this.#carInstance = this.#makeCarInstance(carNamesSplitByComma);
      this.#carRace = new CarRace(this.#carInstance);
    } catch (error) {
      throw error;
    }
  }

  #makeCarInstance(carNames) {
    return carNames.map((carName) => new Car(carName));
  }

  async #inputTryCount() {
    try {
      const tryCountInput = await input.tryCount();
      const tryCount = Number(tryCountInput);
      carRace.tryCountValidator(tryCount);
      this.#tryCount = tryCount;
    } catch (error) {
      throw error;
    }
  }

  #raceResultStage() {
    this.#carRace.totalUnitRound(this.#tryCount);
    this.#winner = this.#carRace.getWinner();
  }

  #printRaceResult() {
    output.raceResultTitle();
    output.carRaceResult(this.#carRace.result);
  }
}

export default App;
