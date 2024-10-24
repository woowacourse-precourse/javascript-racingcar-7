import { Console, Random } from '@woowacourse/mission-utils';
import { carNameInputHandler, tryNumberHandler } from './utils/userInput.js';

class App {
	async run() {
		const carNameList = await carNameInputHandler();
		const tryNumber = await tryNumberHandler();

		// 각 자동차 위치 초기화
		const positions = Array(carNameList.length).fill(0);

		const startRacingGame = (carNameList, tryNumber) => {
			for (let i = 0; i < tryNumber; i++) {
				// 전진 : 무작위 값 0-9까지 값의 4 이상의 값 -> 랜덤숫자
				for (let j = 0; j < carNameList.length; j++) {
					const randomNumber = Random.pickNumberInRange(0, 9);
					if (randomNumber >= 4) {
						positions[j] += 1;
					}
					Console.print(`${carNameList[j]} : ${'-'.repeat(positions[j])}`);
				}
				Console.print('');
			}
		};

		// 게임 시작
		startRacingGame(carNameList, parseInt(tryNumber));

		// 경주 결과 출력
		const maxPosition = Math.max(...positions);
		const winners = carNameList.filter(
			(_, index) => positions[index] === maxPosition
		);
		Console.print(`최종 우승자 : ${winners.join(', ')}`);
	}
}

export default App;
