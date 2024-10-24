import { validateNameLength } from "../src/utils/validate";

describe("자동차 이름", () => {
	test("자동차 이름이 5자를 초과", async () => {
		// given
		const carNames = "ayden,aydenote";

		// when, then;
		await expect(validateNameLength(carNames)).rejects.toThrow(
			"[ERROR] 입력할 수 있는 자동차 이름은 한 대당 최대 5자입니다."
		);
	});
});
