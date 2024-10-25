import { Console, Random } from '@woowacourse/mission-utils';

export function startRacingGame(carNameList, tryNumber, positions) {
	for (let i = 0; i < tryNumber; i++) {
		playOneRound(carNameList, positions);
	}
}

const shouldMoveForward = () => {
	const randomNumber = Random.pickNumberInRange(0, 9);
	return randomNumber >= 4;
};

const moveCarIfPossible = (carIndex, positions) => {
	if (shouldMoveForward()) {
		positions[carIndex] += 1;
	}
};

const playOneRound = (carNameList, positions) => {
	carNameList.forEach((carName, index) => {
		moveCarIfPossible(index, positions);
		Console.print(`${carName} : ${'-'.repeat(positions[index])}`);
	});
	Console.print('');
};
