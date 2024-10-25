import { ReadName } from "./handler/ReadName.js";
import { ReadAttemptCount } from "./handler/ReadAttemptCount.js";
import { PrintWinners } from "./handler/PrintWinners.js";
import { Game } from "./Game.js";
import { Car } from "./Car.js";

class App {
  #inputName;
  #inputAttemptCount;
  #printWinner;
  #game;

  constructor() {
    this.#inputName = new ReadName();
    this.#inputAttemptCount = new ReadAttemptCount();
    this.#game = new Game();
    this.#printWinner = new PrintWinners();
  }

  async run() {
    const namesArr = await this.#inputName.read();
    const cars = namesArr.map((name) => new Car(name))
    const attemptCount = await this.#inputAttemptCount.read();
    const winnerNamesArr = this.#game.play(attemptCount, cars);
    this.#printWinner.print(winnerNamesArr);
  }
}

export default App;
