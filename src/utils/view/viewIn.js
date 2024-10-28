import { INPUT } from '../../constants/message.js';
import { Console } from '@woowacourse/mission-utils';

export const getCars = () => {
	return Console.readLineAsync(`${INPUT.CARS}\n`);
};

export const getCount = () => {
	return Console.readLineAsync(`${INPUT.COUNT}\n`);
};
