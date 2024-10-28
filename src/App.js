import View from "./View.js";
import Car from "./Car.js";
import Race from "./Race.js";

class App {
  #input = new View();
  #race = new Race();

  async run() {
    const carNames = await this.#input.readInputCar();
    const raceCount = await this.#input.readInputRaceCount();
    
    this.#race.setRaceCount(raceCount);

    // Race 객체에 Car객체 추가
    carNames.forEach(carName => {
      this.#race.addRacingCar(new Car(carName));
    });

    this.#race.getCars();

  }
}

export default App;
