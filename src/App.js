import Main from "./controllers/Main";

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
