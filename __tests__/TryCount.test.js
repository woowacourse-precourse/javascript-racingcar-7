import {
	validateMaxCount,
	validateMinCount,
	validateString,
} from "../src/utils/validate.js";

describe("시도 횟수 입력", () => {
	test("시도 횟수 최소 입력", async () => {
		// given
		const tryCount = "0";

		// when, then
		await expect(validateMinCount(tryCount)).rejects.toThrow(
			"[ERROR] 입력할 수 있는 시도 횟수는 최소 1회입니다."
		);
	});

	test("시도 횟수 초과 입력", async () => {
		// given
		const tryCount = "11";

		// when, then
		await expect(validateMaxCount(tryCount)).rejects.toThrow(
			"[ERROR] 입력할 수 있는 시도 횟수는 최대 10회입니다."
		);
	});

	test("시도 횟수 미입력", async () => {
		// given
		const tryCount = "";

		// when, then
		await expect(validateMinCount(tryCount)).rejects.toThrow(
			"[ERROR] 입력할 수 있는 시도 횟수는 최소 1회입니다."
		);
	});

	test("시도 횟수 문자 입력", async () => {
		// given
		const tryCount = "count";

		// when, then
		await expect(validateString(tryCount)).rejects.toThrow(
			"[ERROR] 시도 횟수는 숫자만 입력이 가능합니다."
		);
	});
});
