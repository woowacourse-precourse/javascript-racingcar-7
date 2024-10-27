import { validateCount } from '../src/utils/validator/count.js';
import { ERROR } from '../src/constants/message.js';

describe('Count 유효성 검사 테스트', () => {
	test('테스트 - 숫자 타입 검사', () => {
		const count = 'abc';
		expect(() => validateCount(count)).toThrow(`[ERROR] ${ERROR.VALID}`);
	});

	test('테스트 - 1회 이하', () => {
		const count = 0;
		expect(() => validateCount(count)).toThrow(
			`[ERROR] ${ERROR.OVER_MIN_COUNT}`,
		);
	});

	test('테스트 - 올바른 값', () => {
		const count = 5;
		expect(() => validateCount(count)).not.toThrow();
	});
});
