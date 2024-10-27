import App from "../src/App.js";
import {MissionUtils} from "@woowacourse/mission-utils";
import RacingCarUtils from "../src/utils/RacingCarUtils.js";
import RacingCar from "../src/RacingCar.js";
import ErrorCode from "../src/datas/ErrorCode.js";

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

    //주요함수 unit test

    // findWinner
    test('에러테스트 - RacingCarUtils.findWinners 테스트 : 빈배열', () => {
        const cars = []
        expect(() => RacingCarUtils.findWinners(cars)).toThrow(ErrorCode.CAR_NOT_ENOUGH);
    });

    test.each([
        [
            [
                new RacingCar("a","----")
            ],
            ["a"]
        ],
        [
            [
                new RacingCar("a","----"),
                new RacingCar("b","----")
            ],
            ["a","b"]
        ],
        [
            [
                new RacingCar("a","--"),
                new RacingCar("b","-"),
                new RacingCar("c","---")
            ],
            ["c"]
        ],
    ])("RacingCarUtils.findWinners 정상 테스트", (param, expected) => {
        expect(RacingCarUtils.findWinners(param)).toEqual(expected);
    });


    //
});
