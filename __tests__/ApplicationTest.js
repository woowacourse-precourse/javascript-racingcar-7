import App from "../src/App.js";
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

describe("자동차 경주", () => {
	test("기능 테스트", async () => {
		// given
		const MOVING_FORWARD = 4;
		const STOP = 3;
		const inputs = ["pobi,woni", "1"];
		const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
		const logSpy = getLogSpy();

		mockQuestions(inputs);
		mockRandoms([MOVING_FORWARD, STOP]);

		// when
		const app = new App();
		await app.run();

		// then
		logs.forEach((log) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
		});
	});

	test("이름이 5자 초과인 경우 예외 테스트", async () => {
		// given
		const inputs = ["pobi,javaji"];
		mockQuestions(inputs);

		// when
		const app = new App();

		// then
		await expect(app.run()).rejects.toThrow("[ERROR]");
	});

	test("자동차 이름에 공백이 포함된 경우 예외 테스트", async () => {
		// given
		const inputs = ["pobi,wo ni"];
		mockQuestions(inputs);

		// when
		const app = new App();

		// then
		await expect(app.run()).rejects.toThrow("[ERROR]");
	});

	test("자동차 수가 10대를 초과한 경우 예외 테스트", async () => {
		// given
		const inputs = ["car1,car2,car3,car4,car5,car6,car7,car8,car9,car10,car11"];
		mockQuestions(inputs);

		// when
		const app = new App();

		// then
		await expect(app.run()).rejects.toThrow("[ERROR]");
	});

	test("이동 횟수가 정수가 아닌 경우 예외 테스트", async () => {
		// given
		const inputs = ["pobi,woni", "three"];
		mockQuestions(inputs);

		// when
		const app = new App();

		// then
		await expect(app.run()).rejects.toThrow("[ERROR]");
	});
});
