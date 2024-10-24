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

    test("예외 테스트", async () => {
        // given
        const inputs = ["pobi,javaji"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("자동차 이름 검증 예외 테스트, 자동차 수가 1대 이하일 때", async () => {
        // given
        const inputs = ["pobi", "1"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR");
    });

    test("자동차 이름 검증 예외 테스트, 자동차 이름이 1자 미만일 때", async () => {
        // given
        const inputs = ["pobi,,jun", "1"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("자동차 이름 검증 예외 테스트, 자동차 이름이 중복될 때", async () => {
        // given
        const inputs = ["pobi,pobi,jun", "1"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수 검증 예외 테스트, 시도 횟수가 0일 때", async () => {
        // given
        const inputs = ["pobi,jun", "0"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수 검증 예외 테스트, 시도 횟수가 음수일 때", async () => {
        // given
        const inputs = ["pobi,jun", "-1"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수 검증 예외 테스트, 시도 횟수가 30회 초과일 때", async () => {
        // given
        const inputs = ["pobi,jun", "31"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수 검증 예외 테스트, 시도 횟수가 숫자가 아닐 때", async () => {
        // given
        const inputs = ["pobi,jun", "a"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });
});
