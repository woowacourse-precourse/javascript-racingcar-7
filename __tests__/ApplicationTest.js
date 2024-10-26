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
    test("기본 기능", async () => {
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

    test("공동 우승자가 함께 출력되는가?", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["quick,silvy,stone", "1"];
        const logs = ["quick : -", "silvy : ", "stone : -", "최종 우승자 : quick, stone"];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([MOVING_FORWARD, STOP, MOVING_FORWARD]);

        // when
        const app = new App();
        await app.run();

        // then
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("각 경기 결과 사이에 한 줄 공백이 존재하는가?", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["slime,v8", "2"];
        const expectedOutput = [
            "실행 결과",
            "slime : -",
            "v8 : ",
            "",
            "slime : --",
            "v8 : -"
        ].join("\n");
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD]);

        // when
        const app = new App();
        await app.run();

        // then
        const actualOutput = logSpy.mock.calls.map(call => call[0]).join("\n"); // 모든 호출을 합쳐서 줄바꿈 포함
        expect(actualOutput).toMatch(expectedOutput);
    });
});

describe("예외 처리 테스트", () => {
    test("에러 메세지가 [ERROR]로 시작하는가?", async () => {
        // given
        const inputs = ["pobi,javaji"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });
});