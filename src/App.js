import CarGameController from "./CarGameController.js";

class App {
    async run() {
        await new CarGameController().play();
    }
}

export default App;
