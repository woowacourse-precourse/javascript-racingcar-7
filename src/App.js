import { InputName } from "./handler/InputName.js";
import { InputAttemptCount } from "./handler/InputAttemptCount.js";
import { PrintWinners } from "./handler/PrintWinners.js";
import { Game } from "./Game.js";
import { Car } from "./Car.js";

class App {
  #inputName;
  #inputAttemptCount;
  #printWinner;
  #game;

  constructor() {
    this.#inputName = new InputName();
    this.#inputAttemptCount = new InputAttemptCount();
    this.#game = new Game();
    this.#printWinner = new PrintWinners();
  }

  async run() {
    const namesArr = await this.#inputName.read();
    const cars = namesArr.map((name) => new Car(name))
    const attemptCount = await this.#inputAttemptCount.read();
    this.#game.play(attemptCount, cars);
    this.#printWinner.printWinners(cars);
  }
}

export default App;
