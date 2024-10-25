import GameController from './controllers/GameController.js';

class App {
  async run() {
    try {
      GameController.play();
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default App;
