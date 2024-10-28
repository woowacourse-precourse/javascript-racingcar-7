import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../src/constatns/validation';
import { InputView } from '../src/view/InputView';

jest.mock('@woowacourse/mission-utils');

describe('InputView 테스트', () => {
	let inputView;

	beforeEach(() => {
		inputView = new InputView();
		Console.readLineAsync = jest.fn();
	});

	describe('getCarNames 테스트', () => {
		test('올바른 자동차 이름 입력 시 배열로 반환', async () => {
			// given
			Console.readLineAsync.mockResolvedValue('pobi,woni,jun');

			// when
			const result = await inputView.getCarNames();

			// then
			expect(result).toEqual(['pobi', 'woni', 'jun']);
		});

		test('빈 문자열이 포함된 경우 에러 발생', async () => {
			// given
			Console.readLineAsync.mockResolvedValue('pobi,,jun');

			// when & then
			await expect(inputView.getCarNames()).rejects.toThrow(
				ERROR_MESSAGES.hasNothing
			);
		});

		test('이름에 공백이 포함된 경우 에러 발생', async () => {
			// given
			Console.readLineAsync.mockResolvedValue('pobi,wo ni,jun');

			// when & then
			await expect(inputView.getCarNames()).rejects.toThrow(
				ERROR_MESSAGES.hasWhiteSpace
			);
		});

		test('이름이 5자를 초과하는 경우 에러 발생', async () => {
			// given
			Console.readLineAsync.mockResolvedValue('pobiiii,woni,jun');

			// when & then
			await expect(inputView.getCarNames()).rejects.toThrow(
				ERROR_MESSAGES.invalidNameLength
			);
		});

		test('중복된 이름이 있는 경우 에러 발생', async () => {
			// given
			Console.readLineAsync.mockResolvedValue('pobi,pobi,jun');

			// when & then
			await expect(inputView.getCarNames()).rejects.toThrow(
				ERROR_MESSAGES.isDuplicates
			);
		});
	});

	describe('getRoundNumber 테스트', () => {
		test('올바른 라운드 수 입력 시 숫자로 반환', async () => {
			// given
			Console.readLineAsync.mockResolvedValue('5');

			// when
			const result = await inputView.getRoundNumber();

			// then
			expect(result).toBe(5);
		});

		test('음수 입력 시 에러 발생', async () => {
			// given
			Console.readLineAsync.mockResolvedValue('-1');

			// when & then
			await expect(inputView.getRoundNumber()).rejects.toThrow(
				ERROR_MESSAGES.isNegative
			);
		});

		test('0 입력 시 에러 발생', async () => {
			// given
			Console.readLineAsync.mockResolvedValue('0');

			// when & then
			await expect(inputView.getRoundNumber()).rejects.toThrow(
				ERROR_MESSAGES.isNegative
			);
		});

		test('숫자가 아닌 입력 시 에러 발생', async () => {
			// given
			Console.readLineAsync.mockResolvedValue('abc');

			// when & then
			await expect(inputView.getRoundNumber()).rejects.toThrow(
				ERROR_MESSAGES.isNaN
			);
		});

		test('공백이 포함된 경우 에러 발생', async () => {
			// given
			Console.readLineAsync.mockResolvedValue('5 ');

			// when & then
			await expect(inputView.getRoundNumber()).rejects.toThrow(
				ERROR_MESSAGES.hasWhiteSpace
			);
		});

		test('빈 문자열 입력 시 에러 발생', async () => {
			// given
			Console.readLineAsync.mockResolvedValue('');

			// when & then
			await expect(inputView.getRoundNumber()).rejects.toThrow(
				ERROR_MESSAGES.hasNothing
			);
		});
	});
});
