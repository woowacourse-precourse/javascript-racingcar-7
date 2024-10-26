import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import { ERROR_MESSAGE } from "../src/utils/ErrorMessage.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();


    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

let app;

beforeAll(() => {
    app = new App();
});

describe('예외 테스트', () => {
    describe('자동차명 유효성 검사', () => {
        const NAME_NAX_LENGTH = 5;

        test("자동차명에 빈값을 입력하면 에러가 발생한다.", async () => {
            // given
            const inputs = [''];
            mockQuestions(inputs);

            // when
            // then
            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.EMPTY_INPUT_NOT_ALLOW);
        });

        test("자동차명 사이에 빈값을 입력하면 에러가 발생한다.", async () => {
            // given
            const inputs = ['pobi,,woni'];
            mockQuestions(inputs);

            // when
            // then
            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.EMPTY_INPUT_NOT_ALLOW);
        });

        test(`자동차명이 ${NAME_NAX_LENGTH}자가 넘어가면 에러가 발생한다.`, async () => {
            // given
            const errorName = 'pineapple';
            const input = [`pobi,${errorName}`];
            mockQuestions(input);

            // when
            // then
            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.NAME_LENGTH_EXCEEDED(NAME_NAX_LENGTH, errorName));
        });

        test("자동차명은 숫자로 입력될 수 없습니다.", async () => {
            // given
            const errorName = '123';
            const input = [`pobi,${errorName}`];
            mockQuestions(input);

            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.ONLY_USED_ENGLISH(errorName));
        });

        test("자동차명에 특수문자는 포함될 수 없습니다.", async () => {
            // given
            const errorName = 'woni@';
            const input = [`pobi,${errorName}`];
            mockQuestions(input);

            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.ONLY_USED_ENGLISH(errorName));
        });

        test("자동차명은 한글로 입력될 수 없습니다.", async () => {
            // given
            const errorName = '포비';
            const input = [`pobi,${errorName}`];
            mockQuestions(input);

            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.ONLY_USED_ENGLISH(errorName));
        });
    });

    describe("경주 횟수 유효성 검사", () => {
        const MAX_RACING_COUNT = 100;

        test(`입력된 경주 횟수가 ${MAX_RACING_COUNT}회를 초과할 경우 에러가 발생한다.`, async () => {
            const racingCount = 101;

            // given
            const inputs = ["pobi,woni", racingCount];
            mockQuestions(inputs);


            await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.RACING_COUNT_EXCEEDED(MAX_RACING_COUNT, racingCount));
        });
    })
});
