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

describe("자동차 경주 기능 테스트", () => {
    test("우승자가 한 명", async () => {
        const inputs = ["pobi,woni", "2"];
        const logs = ["pobi : --", "woni : -", "최종 우승자 : pobi"];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([5, 5, 5, 2]);

        const app = new App();
        await app.run();

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("우승자가 여러 명", async () => {
        const inputs = ["pobi,woni", "2"];
        const logs = ["pobi : --", "woni : --", "최종 우승자 : pobi, woni"];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([5, 5, 5, 5]);

        const app = new App();
        await app.run();

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });


});
