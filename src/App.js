import { Console, Random } from '@woowacourse/mission-utils';
import { carNameInputHandler, tryNumberHandler } from './utils/userInput.js';
import { initializePositions } from './utils/initializePositions.js';
import { calculateWinners } from './utils/calculateWinners.js';
import { startRacingGame } from './services/startRacingGame.js';

class App {
	async run() {
		const carNameList = await carNameInputHandler();
		const tryNumber = await tryNumberHandler();

		// 각 자동차 위치 초기화
		const positions = initializePositions(carNameList.length);

		// 게임 시작
		startRacingGame(carNameList, tryNumber, positions);

		// 경주 결과 출력
		const winners = calculateWinners(carNameList, positions);
		Console.print(`최종 우승자 : ${winners.join(', ')}`);
	}
}

export default App;
