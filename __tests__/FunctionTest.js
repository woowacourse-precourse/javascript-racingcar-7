import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

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
    test("한 명이 우승하는 경우", async () => {
        const inputs = ["pobi,woni", "3"];
        const logs = ["pobi : ---", "woni : -", "최종 우승자 : pobi"];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([4, 4, 4, 3, 4, 3]); // pobi 3칸, woni 1칸

        const app = new App();
        await app.run();

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("공동 우승하는 경우", async () => {
        const inputs = ["pobi,woni", "3"];
        const logs = ["pobi : ---", "woni : ---", "최종 우승자 : pobi, woni"];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([4, 4, 4, 4, 4, 4]); // pobi 3칸, woni 3칸

        const app = new App();
        await app.run();

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("3명이서 경주하는 경우", async () => {
        const inputs = ["pobi,woni,jun", "2"];
        const logs = ["pobi : --", "woni : ", "jun : -", "최종 우승자 : pobi"];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([4, 1, 1, 4, 2, 4]); // pobi 2칸, woni 0칸, jun 1칸

        const app = new App();
        await app.run();

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
});
