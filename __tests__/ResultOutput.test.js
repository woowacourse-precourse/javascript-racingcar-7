import RacingCar from "../src/RacingCar";
import { getLogSpy, mockQuestions, mockRandoms } from "../src/utils/mock.js";

describe("결과 출력", () => {
	test("단일 게임 결과 출력", async () => {
		// given
		const inputs = ["ayden,test", "1"];
		const MOVING_FORWARD = 4;
		const STOP = 3;
		const logs = ["ayden : -", "test : "];

		mockQuestions(inputs);
		mockRandoms([MOVING_FORWARD, STOP]);
		const logSpy = getLogSpy();

		// when
		const racingCar = new RacingCar();
		await racingCar.runRacingCar();

		// then
		logs.forEach((log) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
		});
	});
});
