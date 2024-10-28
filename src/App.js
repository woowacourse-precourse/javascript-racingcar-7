import Car from "./Car.js";
import Board from "./Board.js";
import { inputNames, splitName, inputNameValidation, inputTryCount } from "./inputValue/InputValue.js";
import { raceStart } from "./Move.js";

class App {
  async run() {
    const inputs = await inputNames();
    const carNames = splitName(inputs);

    carNames.forEach(name => inputNameValidation(name));

    const carList = carNames.map(name => new Car(name));
    const board = new Board(carList);
    const inputCount = await inputTryCount();

    board.boardStartSentence();
    for (let round = 0; round < inputCount; round++){
      raceStart(carList);
      board.printRaceBoard();
    }
    board.getWinner();
    board.printWinner();
  }
}

export default App;

