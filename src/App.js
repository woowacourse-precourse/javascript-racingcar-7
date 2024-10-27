import CarGameController from "./CarGameController.js";

class App {
    async run() {
        const gameController = new CarGameController();
        await gameController.play();
    }
}

export default App;
