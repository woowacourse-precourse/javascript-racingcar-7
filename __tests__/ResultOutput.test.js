import CarRacing from "../src/CarRacing.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickNumberInRange = jest.fn();

	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, "print");
	logSpy.mockClear();
	return logSpy;
};

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
		const carRacing = new CarRacing();
		await carRacing.runRacing();

		// then
		logs.forEach((log) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
		});
	});

	test("다수 우승자 출력", async () => {
		// given
		const inputs = ["ayden,test", "1"];
		const MOVING_FORWARD = 4;
		const logs = ["ayden : -", "test : -", "최종 우승자 : ayden, test"];

		mockQuestions(inputs);
		mockRandoms([MOVING_FORWARD, MOVING_FORWARD]);
		const logSpy = getLogSpy();

		// when
		const carRacing = new CarRacing();
		await carRacing.runRacing();

		// then
		logs.forEach((log) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
		});
	});

	test("우승자가 없는 경우 출력", async () => {
		// given
		const inputs = ["ayden,test", "1"];
		const STOP = 3;
		const logs = ["ayden : ", "test : ", "최종 우승자 : 우승자가 없습니다."];

		mockQuestions(inputs);
		mockRandoms([STOP, STOP]);
		const logSpy = getLogSpy();

		// when
		const carRacing = new CarRacing();
		await carRacing.runRacing();

		// then
		logs.forEach((log) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
		});
	});
});
