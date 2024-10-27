import Cars from "../../src/models/Cars.js";
import AppError from "../../src/errors/AppError.js";
import { ERROR_MESSAGE } from "../../src/constants/errorMessages.js";

describe("자동차 이름을 관리하는 클래스 Test", () => {
    test("자동차 이름 입력 정상 기능 테스트", () => {
        const carNames = 'pobi,woni';
        const result = Cars.getRacingCarNames(carNames);
        expect(result).toStrictEqual(['pobi', 'woni']);
    });

    test("자동차 이름이 중복이 될 때 예외처리를 발생한다.", () => {
        const carNames = ['pobi','pobi'];
        expect(() => {
            new Cars(carNames);
        }).toThrow(new AppError(ERROR_MESSAGE.input_duplicate_car_name));
    });

    test("자동차 이름 입력값에 공백이 포함될 경우 예외처리를 발생한다.", () => {
        const carNames = ['pobi','po bi'];
        expect(() => {
            new Cars(carNames);
        }).toThrow(new AppError(ERROR_MESSAGE.input_attempt_count_whitespace));
    });

    test("자동차 이름 입력값이 공백일 경우 예외처리를 발생한다.", () => {
        const carNames = ['','pobi'];
        expect(() => {
            new Cars(carNames);
        }).toThrow(new AppError(ERROR_MESSAGE.input_attempt_count_whitespace));
    });

    test("자동차 이름중 5자를 넘어가는 자동차가 있는 경우 예외처리를 발생한다.", () => {
        const carNames = ['jeehoon','pobi'];
        expect(() => {
            new Cars(carNames);
        }).toThrow(new AppError(ERROR_MESSAGE.input_name_exceeds_max_length));
    });

    test("자동차는 최소 2대 이상이지만 1대만 입력했을 경우 예외처리를 발생한다.", () => {
        const carNames = ['pobi'];
        expect(() => {
            new Cars(carNames);
        }).toThrow(new AppError(ERROR_MESSAGE.input_minimum_car_count));
    });

    test("자동차는 최소 2대 이상이지만 1대만 입력했을 경우 예외처리를 발생한다.", () => {
        const carNames = ['pobi'];
        expect(() => {
            new Cars(carNames);
        }).toThrow(new AppError(ERROR_MESSAGE.input_minimum_car_count));
    });
});