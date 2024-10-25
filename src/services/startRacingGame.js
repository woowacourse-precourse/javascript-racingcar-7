import { Console, Random } from '@woowacourse/mission-utils';

export function startRacingGame(carNameList, tryNumber, positions) {
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
}
