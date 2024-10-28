import AttemptCounter from "../../src/models/AttemptCounter.js";
import AppError from "../../src/errors/AppError.js";
import { ERROR_MESSAGE } from "../../src/constants/errorMessages.js";

describe("시도 횟수를 관리하는 클래스 Test", () => {
    test("시도 횟수 입력 정상 기능 테스트", () => {
        const attemptCount = 3;
        const result = AttemptCounter.getAttemptCount(attemptCount);
        expect(result).toStrictEqual(attemptCount);
    });

    test("이동 횟수가 숫자가 아닐 경우 예외처리를 발생한다.", () => {
        const attemptCount = 'test';
        expect(() => {
            new AttemptCounter(attemptCount);
        }).toThrow(new AppError(ERROR_MESSAGE.input_attempt_count_is_number));
    });

    test("이동 횟수가 0일 경우 예외처리를 발생한다.", () => {
        const attemptCount = 0;
        expect(() => {
            new AttemptCounter(attemptCount);
        }).toThrow(new AppError(ERROR_MESSAGE.input_attempt_count_is_not_zero));
    });

    test("이동 횟수에 공백이 들어간 경우 예외처리를 발생한다.", () => {
        const attemptCount = '1 1';
        expect(() => {
            new AttemptCounter(attemptCount);
        }).toThrow(new AppError(ERROR_MESSAGE.input_attempt_count_whitespace));
    });

    test("이동 횟수는 무조건 양의 정수여야 하지만 음수일 경우 예외처리를 발생한다.", () => {
        const attemptCount = -4;
        expect(() => {
            new AttemptCounter(attemptCount);
        }).toThrow(new AppError(ERROR_MESSAGE.input_attempt_count_positive_integer));
    });

    test("이동 횟수가 소수점일 경우 예외처리를 발생한다.", () => {
        const attemptCount = 1.5;
        expect(() => {
            new AttemptCounter(attemptCount);
        }).toThrow(new AppError(ERROR_MESSAGE.input_attempt_count_decimal_number));
    });
});