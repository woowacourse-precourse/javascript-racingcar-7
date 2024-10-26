import CarRace from "./CarRace";
class App {
  async run() {
    const racing = new CarRace();
    await racing.race();
  }
}

export default App;
