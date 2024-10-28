import CarRacing from "./controller/CarRacing.js";

class App {
  async run() {
    const carRacing = new CarRacing();
    await carRacing.init();
  }
}

export default App;
