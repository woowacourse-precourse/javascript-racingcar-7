import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../src/constatns/validation';
import { InputView } from '../src/view/InputView';
import OutputView from '../src/view/OutputView';

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

describe('OutputView 테스트', () => {
	let outputView;
	let mockConsole;

	beforeEach(() => {
		outputView = new OutputView();
		Console.print = jest.fn();
	});

	describe('printRoundResult 테스트', () => {
		test('자동차들의 현재 위치를 올바르게 출력', () => {
			// given
			const cars = [
				{ getName: () => 'pobi', getCurrentPosition: () => 2 },
				{ getName: () => 'woni', getCurrentPosition: () => 1 },
				{ getName: () => 'jun', getCurrentPosition: () => 0 },
			];

			// when
			outputView.printRoundResult(cars);

			// then
			expect(Console.print).toHaveBeenCalledWith('pobi : --');
			expect(Console.print).toHaveBeenCalledWith('woni : -');
			expect(Console.print).toHaveBeenCalledWith('jun : ');
			expect(Console.print).toHaveBeenCalledWith('\n');
		});

		test('cars가 undefined인 경우 에러 없이 처리', () => {
			// when
			outputView.printRoundResult(undefined);

			// then
			expect(Console.print).toHaveBeenCalledWith('\n');
		});
	});

	describe('printWinner 테스트', () => {
		test('단일 우승자 출력', () => {
			// given
			const winners = ['pobi'];

			// when
			outputView.printWinner(winners);

			// then
			expect(Console.print).toHaveBeenCalledWith('최종 우승자 : pobi');
		});

		test('복수 우승자 출력', () => {
			// given
			const winners = ['pobi', 'woni', 'jun'];

			// when
			outputView.printWinner(winners);

			// then
			expect(Console.print).toHaveBeenCalledWith(
				'최종 우승자 : pobi, woni, jun'
			);
		});
	});

	describe('formatRoundResult 테스트', () => {
		test('자동차의 이름과 위치를 올바른 형식으로 반환', () => {
			// given
			const car = {
				getName: () => 'pobi',
				getCurrentPosition: () => 3,
			};

			// when
			const result = outputView.formatRoundResult(car);

			// then
			expect(result).toBe('pobi : ---');
		});

		test('위치가 0인 경우 대시(-) 없이 반환', () => {
			// given
			const car = {
				getName: () => 'pobi',
				getCurrentPosition: () => 0,
			};

			// when
			const result = outputView.formatRoundResult(car);

			// then
			expect(result).toBe('pobi : ');
		});
	});

	describe('formatWinner 테스트', () => {
		test('우승자 목록을 올바른 형식으로 반환', () => {
			// given
			const winners = ['pobi', 'woni'];

			// when
			const result = outputView.formatWinner(winners);

			// then
			expect(result).toBe('최종 우승자 : pobi, woni');
		});
	});
});
