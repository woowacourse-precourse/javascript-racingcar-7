import Validator from '../src/utils/Validator.js';
import { describe, test, expect } from '@jest/globals';

describe('Validator 클래스 테스트', () => {
    test('빈 자동차 이름 배열이 입력되면 에러가 발생한다', () => {
        expect(() => {
            Validator.validateCarNames([]);
        }).toThrow('[ERROR] 자동차 이름을 입력해주세요.');
    });

    test('자동차 이름이 5자를 초과하면 에러가 발생한다', () => {
        expect(() => {
            Validator.validateCarNames(['pobi', 'woniii']);
        }).toThrow('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    });

    test('시도 횟수가 숫자가 아니면 에러가 발생한다', () => {
        expect(() => {
            Validator.validateAttempts('abc');
        }).toThrow('[ERROR] 시도 횟수는 숫자여야 합니다.');
    });

    test('시도 횟수가 1 미만이면 에러가 발생한다', () => {
        expect(() => {
            Validator.validateAttempts('0');
        }).toThrow('[ERROR] 시도 횟수는 1 이상이어야 합니다.');
    });
});