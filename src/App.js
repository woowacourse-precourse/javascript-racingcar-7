import CarGameController from "./CarGameController";

class App {
    async run() {
        const gameController = new CarGameController();
        await gameController.play();
    }
}

export default App;
