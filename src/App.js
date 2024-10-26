import CarRace from "./controller/CarRace.js";

class App {
  async run() {
    const carRace = new CarRace();
    carRace.init();
  }
}

export default App;
