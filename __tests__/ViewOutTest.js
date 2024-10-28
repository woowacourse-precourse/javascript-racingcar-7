import Car from '../src/Car.js';
import ViewOut from '../src/view/ViewOut.js';
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../src/constants/message.js';

jest.mock('@woowacourse/mission-utils', () => ({
	Console: {
		print: jest.fn(),
	},
}));

describe('ViewOut 결과 출력 테스트', () => {
	beforeEach(() => {
		Console.print.mockClear();
	});

	test('테스트 - 라운드마다 결과가 정삭적으로 나오는가', () => {
		const cars = [new Car('Ray1'), new Car('Ray2')];

		// 첫 번째 라운드
		cars[0].move(5);
		cars[1].move(3);
		ViewOut.raceStatus(cars);

		// 두 번째 라운드
		cars[0].move(6);
		cars[1].move(5);
		ViewOut.raceStatus(cars);

		// 세 번째 라운드
		cars[0].move(1);
		cars[1].move(5);
		ViewOut.raceStatus(cars);

		ViewOut.resultMessage();

		const expectedRaceLogs = [
			'Ray1 : -',
			'Ray2 : ',
			'',
			'Ray1 : --',
			'Ray2 : -',
			'',
			'Ray1 : --',
			'Ray2 : --',
			'',
		];

		expectedRaceLogs.forEach((log, index) => {
			expect(Console.print).toHaveBeenNthCalledWith(index + 1, log);
		});

		expect(Console.print).toHaveBeenCalledWith(`${OUTPUT.RESULT}`);
	});

	test('테스트 - 우승자가 올바르게 출력되는가', () => {
		const winnerCars = [new Car('Ray1'), new Car('Ray2')];

		ViewOut.raceWinner(winnerCars);

		expect(Console.print).toHaveBeenCalledWith(`${OUTPUT.WINNER} : Ray1, Ray2`);
	});
});
