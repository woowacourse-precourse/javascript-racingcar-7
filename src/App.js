import CarRacing from "./CarRacing.js";

class App {
	async run() {
		const carRacing = new CarRacing();
		await carRacing.runRacing();
	}
}

export default App;
