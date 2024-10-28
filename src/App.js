import { RaceController } from "./controllers/RaceController";

class App {
	async run() {
		const raceController = new RaceController();
		await raceController.run();
	}
}

export default App;
