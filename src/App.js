import Main from "./controllers/Main.js";

class App {
  async run() {
    try {
      Main();
    } catch {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
