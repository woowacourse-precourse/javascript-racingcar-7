import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

describe("예외 테스트", () => {
    const errorCases = [
        {
            name: "자동차 입력 안됨",
            inputs: [""],
            expectedError: "[ERROR]",
        },
        {
            name: "자동차 하나만 입력",
            inputs: ["pobi"],
            expectedError: "[ERROR]",
        },
        {
            name: "자동차 이름이 중복된 경우",
            inputs: ["pobi,woni,woni"],
            expectedError: "[ERROR]",
        },
        {
            name: "자동차 이름 길이 5 초과",
            inputs: ["pobi,woniwoni"],
            expectedError: "[ERROR]",
        },
        {
            name: "숫자가 아닌 시도 횟수",
            inputs: ["pobi,woni", "a"],
            expectedError: "[ERROR]",
        },
        {
            name: "0 이하의 시도 횟수",
            inputs: ["pobi,wini", "-2"],
            expectedError: "[ERROR]",
        },
    ];

    test.each(errorCases)("$name", async ({ inputs, expectedError }) => {
        // given
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow(expectedError);
    });
});
