import App from '../src/App.js';
import { mockQuestions } from '../utils/testUtils.js';
import {
    INVALID_RACECOUNT_ERROR,
    INVALID_CARS_ERROR,
    DUPLICATE_CAR_NAME_ERROR,
    BLANK_CAR_NAME_ERROR,
    CAR_NAME_LENGTH_ERROR,
} from '../constants.js';

describe('자동차 경주 예외 테스트', () => {
    test.each([
        ['예외 테스트', [''], INVALID_CARS_ERROR],
        ['중복된 이름', ['pobi,pobi', '1'], DUPLICATE_CAR_NAME_ERROR],
        ['이름이 5자 초과', ['pobi,toolongname', '1'], CAR_NAME_LENGTH_ERROR],
        ['빈 이름', [',woni', '1'], BLANK_CAR_NAME_ERROR],
        ['시도 횟수 음수', ['pobi,woni', '-1'], INVALID_RACECOUNT_ERROR],
        ['시도 횟수 소수', ['pobi,woni', '1.5'], INVALID_RACECOUNT_ERROR],
        ['시도 횟수 문자열', ['pobi,woni', 'abc'], INVALID_RACECOUNT_ERROR],
    ])(
        'case: %s, input: %s, output: %s ',
        async (testName, inputs, expectedError) => {
            mockQuestions(inputs);
            const app = new App();
            await expect(app.run()).rejects.toThrow(expectedError);
        }
    );
});
