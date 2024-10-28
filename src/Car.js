import { getRandomInRangeNumber, printOutput } from "./utils/missionUtils.js";

class Car {
	constructor(name, tryCount) {
		this.name = name;
		this.tryCount = tryCount;
		this.runResults = [];
	}

	setRunResults() {
		this.runResults = Array.from({ length: this.tryCount }, () =>
			getRandomInRangeNumber(0, 9)
		);
	}

	getDashCount() {
		return this.runResults.filter((num) => num >= 4).length;
	}

	printRunResult(step) {
		const dashes = this.runResults
			.slice(0, step + 1)
			.filter((num) => num >= 4)
			.map(() => "-")
			.join("");
		printOutput(`${this.name} : ${dashes}`);
	}
}

export default Car;
