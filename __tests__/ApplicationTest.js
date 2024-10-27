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
    numbers.reduce(
        (acc, number) => acc.mockReturnValueOnce(number),
        MissionUtils.Random.pickNumberInRange
    );
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

// Constants for random numbers
const MOVING_FORWARD = 4;
const STOP = 3;

describe("자동차 경주", () => {
    test.each([
        {
            description: "전진 시도 1회 단일 우승",
            inputs: ["pobi,woni", "1"],
            randomNumbers: [MOVING_FORWARD, STOP],
            logs: ["pobi : -", "woni : ", "최종 우승자 : pobi"],
        },
        {
            description: "전진 시도 1회 공동 우승",
            inputs: ["pobi,woni", "1"],
            randomNumbers: [MOVING_FORWARD, MOVING_FORWARD],
            logs: ["pobi : -", "woni : -", "최종 우승자 : pobi, woni"],
        },
        {
            description: "전진 시도 3회 단일 우승",
            inputs: ["pobi,woni,jun", "3"],
            randomNumbers: [
                MOVING_FORWARD,
                STOP,
                STOP,
                MOVING_FORWARD,
                STOP,
                STOP,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
            ],
            logs: [
                "pobi : -",
                "woni : ",
                "jun : ",
                "pobi : --",
                "woni : ",
                "jun : ",
                "pobi : ---",
                "woni : -",
                "jun : -",
                "최종 우승자 : pobi",
            ],
        },
        {
            description: "전진 시도 3회 공동 우승",
            inputs: ["pobi,woni,jun", "3"],
            randomNumbers: [
                MOVING_FORWARD,
                STOP,
                STOP,
                MOVING_FORWARD,
                MOVING_FORWARD,
                STOP,
                MOVING_FORWARD,
                STOP,
                MOVING_FORWARD,
            ],
            logs: [
                "pobi : -",
                "woni : ",
                "jun : ",
                "pobi : --",
                "woni : -",
                "jun : ",
                "pobi : ---",
                "woni : -",
                "jun : -",
                "최종 우승자 : pobi",
            ],
        },
        {
            description: "전진 시도 5회 단일 우승",
            inputs: ["pobi,woni,jun", "5"],
            randomNumbers: [
                MOVING_FORWARD,
                STOP,
                STOP,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
            ],
            logs: [
                "pobi : -",
                "woni : ",
                "jun : ",
                "pobi : --",
                "woni : -",
                "jun : -",
                "pobi : ---",
                "woni : --",
                "jun : --",
                "pobi : ----",
                "woni : ---",
                "jun : ---",
                "pobi : -----",
                "woni : ----",
                "jun : ----",
                "최종 우승자 : pobi",
            ],
        },
        {
            description: "전진 시도 5회 공동 우승",
            inputs: ["pobi,woni,jun", "5"],
            randomNumbers: [
                MOVING_FORWARD,
                STOP,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
                MOVING_FORWARD,
            ],
            logs: [
                "pobi : -",
                "woni : ",
                "jun : -",
                "pobi : --",
                "woni : -",
                "jun : --",
                "pobi : ---",
                "woni : --",
                "jun : ---",
                "pobi : ----",
                "woni : ---",
                "jun : ----",
                "pobi : -----",
                "woni : ----",
                "jun : -----",
                "최종 우승자 : pobi, jun",
            ],
        },
    ])("$description", async ({ inputs, randomNumbers, logs }) => {
        // given
        const logSpy = getLogSpy();
        mockQuestions(inputs);
        mockRandoms(randomNumbers);

        // when
        const app = new App();
        await app.run();

        // then
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
});
