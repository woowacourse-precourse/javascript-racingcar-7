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
    test.each([
        {
            inputs: ["티볼리,셀토스", "3"],
            randoms: [4, 4, 4, 4, 4, 4],
            expectedLogs: ["티볼리 : ---", "셀토스 : ---"],
            winner: "최종 우승자 : 티볼리, 셀토스",
        },
        {
            inputs: ["티볼리,셀토스", "2"],
            randoms: [3, 3, 3, 3],
            expectedLogs: ["티볼리 : ", "셀토스 : "],
            winner: "최종 우승자 : 티볼리, 셀토스",
        },
        {
            inputs: ["티볼리,싼타페,제네시스", "2"],
            randoms: [6, 6, 6, 6, 6, 6],
            expectedLogs: ["티볼리 : --", "싼타페 : --", "제네시스 : --"],
            winner: "최종 우승자 : 티볼리, 싼타페, 제네시스",
        },
    ])(
        "공동 우승하는 경우 ($inputs, $randoms) => $winner",
        async ({ inputs, randoms, expectedLogs, winner }) => {
            const logSpy = getLogSpy();

            mockQuestions(inputs);
            mockRandoms(randoms);

            const app = new App();
            await app.run();

            const calls = logSpy.mock.calls;

            expectedLogs.forEach((log) => {
                expect(calls[1][0]).toContain(log);
            });

            expect(calls[2][0]).toContain(winner);
        }
    );

    test.each([
        {
            inputs: ["티볼리,셀토스", "3"],
            randoms: [4, 3, 4, 3, 4, 4],
            expectedLogs: ["티볼리 : ---", "셀토스 : -"],
            winner: "최종 우승자 : 티볼리",
        },
        {
            inputs: ["티볼리,셀토스", "2"],
            randoms: [0, 6, 0, 6],
            expectedLogs: ["티볼리 : ", "셀토스 : --"],
            winner: "최종 우승자 : 셀토스",
        },
        {
            inputs: ["티볼리,싼타페,제네시스", "2"],
            randoms: [0, 6, 2, 4, 8, 1],
            expectedLogs: ["티볼리 : -", "싼타페 : --", "제네시스 : "],
            winner: "최종 우승자 : 싼타페",
        },
    ])(
        "한 명이 우승하는 경우 ($inputs, $randoms) => $winner",
        async ({ inputs, randoms, expectedLogs, winner }) => {
            const logSpy = getLogSpy();
            mockQuestions(inputs);
            mockRandoms(randoms);

            const app = new App();
            await app.run();

            const calls = logSpy.mock.calls;

            expectedLogs.forEach((log) => {
                expect(calls[1][0]).toContain(log);
            });

            expect(calls[2][0]).toContain(winner);
        }
    );
});
