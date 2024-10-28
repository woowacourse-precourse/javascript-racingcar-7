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

describe("예외 테스트", () => {
    test("공백이 포함된 자동차 이름", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["pobi , woni ", "3"]; 
        const logs = [
            "pobi : -", 
            "woni : -",
            "pobi : --",
            "woni : ", 
            "pobi : --",
            "woni : -", 
            "최종 우승자 : pobi", 
        ];

        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, STOP, STOP, MOVING_FORWARD]);

        // when
        const app = new App();
        await app.run();

        // then
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("자동차 이름 중복", async () => {
        // given
        const inputs = ["pobi,pobi", "2"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("자동차 이름이 비어있을 때", async () => {
        // given
        const inputs = ["pobi, ,java", "2"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });
});
