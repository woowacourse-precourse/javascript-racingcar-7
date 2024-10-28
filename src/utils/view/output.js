import { OUTPUT } from '../../constants/message.js';
import { Console } from '@woowacourse/mission-utils';

export const showEmpty = () => {
	Console.print('');
};

export const showResultMessage = () => {
	Console.print(`${OUTPUT.RESULT}`);
};

export const showRaceStatus = (cars) => {
	cars.forEach((car) => {
		const carName = car.getName();
		const carPoints = car.getPoints();
		Console.print(`${carName} : ${'-'.repeat(carPoints)}`);
	});

	showEmpty();
};

export const showRaceWinner = (winner) => {
	const winnerMessage = winner.map((car) => car.getName()).join(', ');
	Console.print(`${OUTPUT.WINNER} : ${winnerMessage}`);
};
