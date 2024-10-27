import { validateCars } from '../src/utils/validator/car.js';
import { parseCars } from '../src/utils/parser.js';
import { ERROR } from '../src/constants/message.js';

describe('자동차 유효성 검사 테스트', () => {
	test('테스트 - 올바른 이름 값', async () => {
		// given
		const cars = 'Ray1,Ray2,Ray3';
		const carsArray = parseCars(cars);

		// when, then
		expect(() => validateCars(carsArray)).not.toThrow();
	});

	test('테스트 - 빈 값', async () => {
		// given
		const cars = '';
		const carsArray = parseCars(cars);

		// when, then
		await expect(() => validateCars(carsArray)).toThrow(
			`[ERROR] ${ERROR.EMPTY}`,
		);
	});

	test('테스트 - 5글자 이상', async () => {
		// given
		const cars = 'Ferrari';
		const carsArray = parseCars(cars);

		// when, then
		await expect(() => validateCars(carsArray)).toThrow(
			`[ERROR] ${ERROR.OVER_MAX_LENGTH}`,
		);
	});
});
