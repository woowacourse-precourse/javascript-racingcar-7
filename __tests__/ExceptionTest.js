import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

describe("자동차 경주 예외 처리 테스트", () => {
    let app;

    beforeEach(() => {
        app = new App();
    });

    test.each([
        { carNames: "티볼리,제네시스G80", tryCnt: "3", expected: "[ERROR]" },
        { carNames: "트레일블레이저", tryCnt: "3", expected: "[ERROR]" },
        { carNames: "아반떼,셀토스,트레일블레이저", tryCnt: "2", expected: "[ERROR]" },
    ])(
        "5자를 초과하는 자동차 이름이 있는 경우 예외 발생 ($carNames, $tryCnt) => $expected",
        async ({ carNames, tryCnt, expected }) => {
            mockQuestions([carNames, tryCnt]);
            await expect(app.run()).rejects.toThrow(expected);
        }
    );

    test.each([
        { carNames: "티볼리,,셀토스", tryCnt: "2", expected: "[ERROR]" },
        { carNames: ",,", tryCnt: "3", expected: "[ERROR]" },
        { carNames: "", tryCnt: "2", expected: "[ERROR]" },
    ])(
        "이름이 없는 자동차가 있는 경우 예외 발생 ($carNames, $tryCnt) => $expected",
        async ({ carNames, tryCnt, expected }) => {
            mockQuestions([carNames, tryCnt]);
            await expect(app.run()).rejects.toThrow(expected);
        }
    );

    test.each([
        { carNames: "티볼리,셀토스", tryCnt: "2번", expected: "[ERROR]" },
        { carNames: "티볼리,셀토스", tryCnt: "3%", expected: "[ERROR]" },
        { carNames: "티볼리,셀토스", tryCnt: "", expected: "[ERROR]" },
    ])(
        "시도 횟수가 숫자가 아닌 경우 예외 발생 ($carNames, $tryCnt) => $expected",
        async ({ carNames, tryCnt, expected }) => {
            mockQuestions([carNames, tryCnt]);
            await expect(app.run()).rejects.toThrow(expected);
        }
    );

    test.each([
        { carNames: "티볼리,셀토스", tryCnt: "0", expected: "[ERROR]" },
        { carNames: "티볼리,셀토스", tryCnt: "-3", expected: "[ERROR]" },
        { carNames: "티볼리,셀토스", tryCnt: "-1000000", expected: "[ERROR]" },
    ])(
        "시도 횟수가 숫자가 음수나 0인 경우 예외 발생 ($carNames, $tryCnt) => $expected",
        async ({ carNames, tryCnt, expected }) => {
            mockQuestions([carNames, tryCnt]);
            await expect(app.run()).rejects.toThrow(expected);
        }
    );
});
