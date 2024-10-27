import { MainController } from "./controllers/MainController.js";

class App {
  async run() {
    const controller = new MainController();
    await controller.run()
  }
}
export default App;

