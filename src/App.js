import RaceController from "./controller/RaceController.js";

const racecontroller=new RaceController();

class App {
  async run() {
    await racecontroller.run(); 
  }
}

export default App;