import { Console } from '@woowacourse/mission-utils';

/**
 * @returns {Promise<Array>} - 입력받은 자동차 이름 배열
 */
export async function inputCarNames() {
	const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

	return input.split(',').map((name) => name.trim());
}
