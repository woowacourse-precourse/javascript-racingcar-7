import Input from "./utils/input.js";
import Output from "./utils/output.js";
import Game from "./main/game.js";

class App {
  async run() {
    const cars = await Input.getCars();
    const tries = await Input.getTries();

    const game = new Game();
    game.setGame(cars, tries);
    game.startGame();

    const output = new Output();
    output.printEachRound(game.getRecords());
    output.printWinners(game.getWinners());
  }
}

export default App;
