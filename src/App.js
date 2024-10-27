import Car from "./Car.js";

class App {
	async run() {
		const car = new Car();
		await car.runRacing();
	}
}

export default App;
