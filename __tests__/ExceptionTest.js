import App from '../src/App.js';
import { mockQuestions } from '../utils/testUtils.js';

describe('자동차 경주 예외 테스트', () => {
    test.each([
        ['예외 테스트', [''], '[ERROR] 입력값이 유효하지 않습니다'],
        ['중복된 이름', ['pobi,pobi', '1'], '[ERROR] 중복된 이름이 존재합니다'],
        [
            '이름이 5자 초과',
            ['pobi,toolongname', '1'],
            '[ERROR] 자동차의 이름은 5자 이하로 등록해주세요',
        ],
        [
            '빈 이름',
            [',woni', '1'],
            '[ERROR] 이름이 공백인 자동차가 존재합니다',
        ],
        [
            '시도 횟수 음수',
            ['pobi,woni', '-1'],
            '[ERROR] 유효한 숫자가 아닙니다',
        ],
        [
            '시도 횟수 소수',
            ['pobi,woni', '1.5'],
            '[ERROR] 유효한 숫자가 아닙니다',
        ],
        [
            '시도 횟수 문자열',
            ['pobi,woni', 'abc'],
            '[ERROR] 유효한 숫자가 아닙니다',
        ],
    ])(
        'case: %s, input: %s, output: %s ',
        async (testName, inputs, expectedError) => {
            mockQuestions(inputs);
            const app = new App();
            await expect(app.run()).rejects.toThrow(expectedError);
        }
    );
});
