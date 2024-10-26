import gameController from "./controllers/gameController.js";
class App {
  async run() {
    await gameController.startGame();
  }
}

export default App;
