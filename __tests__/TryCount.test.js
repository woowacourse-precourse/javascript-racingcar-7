import RacingCar from "../src/RacingCar.js";

describe("시도 횟수 입력", () => {
	test("시도 횟수 정상 입력", async () => {
		// given
		const tryCount = "3";

		// when
		const racingCar = new RacingCar();

		// then
		await expect(racingCar.validateTryCount(tryCount)).resolves.not.toThrow();
	});
});
