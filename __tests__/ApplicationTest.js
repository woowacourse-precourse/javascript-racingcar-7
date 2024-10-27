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

    test("전진 테스트", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["pobi,woni,jun", "2"];
        // ["pobi : -", "woni : ", "최종 우승자 : pobi"]
        const logs = ["pobi : ", "woni : ", "jun : -", "pobi : -", "woni : -", "jun : --", "최종 우승자 : jun"];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([STOP, STOP, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD]);

        // when
        const app = new App();
        await app.run();

        // then
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("우승자가 여러명일 때 테스트", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["pobi,woni,jun", "1"];
        const logs = ["pobi : ", "woni : -", "jun : -", "최종 우승자 : woni, jun"];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([STOP, MOVING_FORWARD, MOVING_FORWARD]);

        // when
        const app = new App();
        await app.run();

        // then
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("자동차 이름 공백 테스트", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = [" pobi ,  woni  ,  dobby ", "1"];
        const logs = ["pobi : ", "woni : -", "dobby : ", "최종 우승자 : woni"];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([STOP, MOVING_FORWARD, STOP]);

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

    test("자동차 이름 5자 초과 테스트", async () => {
        // given
        const inputs = ["pobi,woni,sooyeon", "5"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수 음수 테스트", async () => {
        // given
        const inputs = ["pobi,woni", "-1"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수 0 테스트", async () => {
        // given
        const inputs = ["pobi,woni", "0"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수 10초과 테스트", async () => {
        // given
        const inputs = ["pobi,woni", "11"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수 숫자 아닌 값 테스트", async () => {
        // given
        const inputs = ["pobi,woni", "abc"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("자동차 이름 중복 테스트", async () => {
        // given
        const inputs = ["pobi,pobi", "5"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("자동차 이름 특수문자 테스트", async () => {
        // given
        const inputs = ["pobi,!", "5"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("자동차 이름 쉼표로 시작 테스트", async () => {
        // given
        const inputs = [",pobi", "5"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("자동차 이름 쉼표 연속 테스트", async () => {
        // given
        const inputs = ["pobi,,woni", "5"];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
    });
});
