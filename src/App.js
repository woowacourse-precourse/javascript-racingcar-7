import View from "./View.js";
import Car from "./Car.js";
import Race from "./Race.js";
import OutView from "./OutView.js";

class App {
  #input = new View();
  #race = new Race();
  #output = new OutView();

  async run() {
    const carNames = await this.#input.readInputCar();
    const raceCount = await this.#input.readInputRaceCount();

    this.#race.setRaceCount(raceCount);

    // Race 객체에 Car객체 추가
    carNames.forEach(carName => {
      this.#race.addRacingCar(new Car(carName));
    });

    for (let count = 0; count < this.#race.getRaceCount(); count++) {
      this.#race.racing();
      this.#race.showRacingResult();

    }

    this.#race.determineWinner();
    this.#race.showWinner();
    const winners = this.#race.getWinner();

    this.#output.showWinner(winners);
  }
}

export default App;
