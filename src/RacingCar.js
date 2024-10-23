import { userInput } from "./utils/MissionUtils.js";

class RacingCar {
	async runRacingCar() {
		const { carNames, tryCount } = await this.getUserInput();
	}

	async getUserInput() {
		const carNames = await userInput(
			"경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n"
		);
		const tryCount = await userInput("시도할 횟수는 몇 회인가요?\n");
		return { carNames, tryCount };
	}
}

export default RacingCar;
