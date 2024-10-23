import { Console } from '@woowacourse/mission-utils';
import { checkCarInputLength } from './errors/carError.js';
import { checkEmptyInput } from './errors/commonError.js';

class App {
	async run() {
		const carNameInput = await Console.readLineAsync(
			`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`
		);
		const tryNumber = await Console.readLineAsync(
			`시도할 횟수는 몇 회인가요?\n`
		);

		const carList = carNameInput.split(',');
		checkCarInputLength(carList);
		checkEmptyInput(carNameInput);
		checkEmptyInput(tryNumber);

		// 전진 : 무작위 값 0-9까지 값의 4 이상의 값

		// 멈춤 : 3이하

	}
}

export default App;
