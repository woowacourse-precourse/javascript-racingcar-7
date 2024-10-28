import { Console } from '@woowacourse/mission-utils';
import { validateAttemptsNumber } from '../errors/allErrorHandling.js';

/**
 * @returns {Promise<number>} - 입력받은 시도 횟수
 */
export async function inputAttemptsNumber() {
	const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
	validateAttemptsNumber(input);

	return parseInt(input, 10);
}
