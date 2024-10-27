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

    //주요함수 unit test

    // findWinner
    test('[예외테스트] RacingCarUtils.findWinners 테스트 : 빈배열', () => {
        const cars = []
        expect(() => RacingCarUtils.findWinners(cars)).toThrow(ErrorCode.CAR_NOT_ENOUGH);
    });

    test.each([
        [
            [
                new RacingCar("a", "----")
            ],
            ["a"]
        ],
        [
            [
                new RacingCar("a", "----"),
                new RacingCar("b", "----")
            ],
            ["a", "b"]
        ],
        [
            [
                new RacingCar("a", "--"),
                new RacingCar("b", "-"),
                new RacingCar("c", "---")
            ],
            ["c"]
        ],
    ])("[정상 테스트] RacingCarUtils.findWinners", (param, expected) => {
        expect(RacingCarUtils.findWinners(param)).toEqual(expected);
    });


    // 자동차 입력값 받기 테스트
    test("[예외테스트] Car 입력 : 글자 수 5자 초과", async () => {
        // given
        const inputs = ["pobi,javaji"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(ErrorCode.CAR_NAME_TOO_LONG);
    });

    test("[예외테스트] Car 입력 : 글자 수 1자 미만", async () => {
        // given
        const inputs = ["pobi,,js"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(ErrorCode.CAR_NAME_TOO_SHORT);
    });

    test("[예외테스트] Car 입력 : 입력값 없음", async () => {
        // given
        const inputs = [""];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(ErrorCode.EMPTY_INPUT);
    });

    test("[예외테스트] Car 입력 : 중복 이름", async () => {
        // given
        const inputs = ["pobi,yuj,pobi"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(ErrorCode.CAR_NAME_DUPLICATE);
    });

    test("[예외테스트] 시도 횟수 입력 : 입력값 없음", async () => {
        // given
        const inputs = ["pobi,yuj", ""];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(ErrorCode.EMPTY_INPUT);
    });


    test("[예외테스트] 시도 횟수 입력 : 음수 입력", async () => {
        // given
        const inputs = ["pobi,yuj", "-1"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(ErrorCode.TRY_NUMBER_TOO_SMALL);
    });

    test("[예외테스트] 시도 횟수 입력 : 문자 입력", async () => {
        // given
        const inputs = ["pobi,yuj", "a"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(ErrorCode.TRY_NUMBER_NOT_NUMBER);
    });

    // 종단 간 테스트 (End-to-End Test)
    test("종단 간 테스트 : 우승자 1명", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["pobi,woni", "2"];
        const logs = ["pobi : -", "woni : ",
            "pobi : --", "woni : -",
            "최종 우승자 : pobi"];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([MOVING_FORWARD, STOP,
            MOVING_FORWARD, MOVING_FORWARD],);

        // when
        const app = new App();
        await app.run();

        // then
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("종단 간 테스트 : 우승자 2명 이상", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["pobi,woni,jerry", "3"];
        const logs = ["pobi : -", "woni : ", "jerry : -",
            "pobi : --", "woni : -", "jerry : -",
            "pobi : --", "woni : -", "jerry : --",
            "최종 우승자 : pobi, jerry"];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([MOVING_FORWARD, STOP, MOVING_FORWARD,
            MOVING_FORWARD, MOVING_FORWARD, STOP,
            STOP, STOP, MOVING_FORWARD]);

        // when
        const app = new App();
        await app.run();

        // then
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("종단 간 테스트 : 전원 우승", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["pobi,woni,jerry", "1"];
        const logs = ["pobi : -", "woni : -", "jerry : -",
            "최종 우승자 : pobi, woni, jerry"];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD]);

        // when
        const app = new App();
        await app.run();

        // then
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
});
