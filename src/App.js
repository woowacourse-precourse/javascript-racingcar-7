import Game from "../controllers/Game.js";

class App {
  async run() {
    const game = new Game();
    await game.start();
  }
}
export default App;
