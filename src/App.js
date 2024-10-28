import CarRacing from "./controller/CarRacing.js";

class App {
  async run() {
    const carRacing = new CarRacing();
    carRacing.init();
  }
}

export default App;
