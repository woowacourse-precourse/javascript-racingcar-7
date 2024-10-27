import { MainController } from "./controllers/MainController";

class App {
  async run() {
    const controller = new MainController();
    await controller.run()
  }
}
export default App;

