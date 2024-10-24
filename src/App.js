import { Console, Random } from '@woowacourse/mission-utils';
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

		// 각 자동차 위치 초기화
		const positions = Array(carList.length).fill(0);

		const startRacingGame = (carList, tryNumber) => {
			for (let i = 0; i < tryNumber; i++) {
				// 전진 : 무작위 값 0-9까지 값의 4 이상의 값 -> 랜덤숫자
				for (let j = 0; j < carList.length; j++) {
					const randomNumber = Random.pickNumberInRange(0, 9);
					if (randomNumber >= 4) {
						positions[j] += 1;
					}
					Console.print(`${carList[j]} : ${'-'.repeat(positions[j])}`);
				}
				Console.print('');
			}
		};

		// 게임 시작
		startRacingGame(carList, parseInt(tryNumber));

		
	}
}

export default App;
