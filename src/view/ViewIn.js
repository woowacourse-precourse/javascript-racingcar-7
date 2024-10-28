import { INPUT } from '../constants/message.js';
import { Console } from '@woowacourse/mission-utils';

export default class ViewIn {
	static async cars() {
		return Console.readLineAsync(`${INPUT.CARS}\n`);
	}

	static async count() {
		return Console.readLineAsync(`${INPUT.COUNT}\n`);
	}
}
