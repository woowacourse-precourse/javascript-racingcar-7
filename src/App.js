import CarRace from './Model/CarRace.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  #input_view = new InputView();

  #output_view = new OutputView();

  async run() {
    const carNames = await this.#input_view.readCarNamesFromInput();
    const raceCount = await this.#input_view.readRaceCountFromInput();

    const carRace = new CarRace(carNames, raceCount);

    this.#output_view.printExecutionResult();

    Array.from({ length: Number(raceCount) }).forEach(() => {
      const cars = carRace.race();
      cars.forEach((car) => {
        this.#output_view.printRaceResult(car.getName(), car.getMoveCount());
      });
      this.#output_view.printLineBreak();
    });

    const winners = carRace.getRaceWinners();

    this.#output_view.printRaceWinners(winners);
  }
}

export default App;
