import { Console, Random } from '@woowacourse/mission-utils';

class App {
	async getCarInput() {
		const carNamesInput = await Console.readLineAsync(
			'경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
		);
		if (!carNamesInput || carNamesInput.trim() === '') {
			throw new Error('[ERROR] 자동차 이름을 입력해야 합니다.');
		}

		const carNames = carNamesInput.split(',');

		if (carNames.some((name) => name.length > 5)) {
			throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.');
		}
		return carNames.map((name) => ({ name: name.trim(), position: 0 }));
	}

	async run() {
		try {
			const cars = await this.getCarInput();
		} catch (error) {
			Console.print(error.message);
			throw error;
		}
	}
}

export default App;
