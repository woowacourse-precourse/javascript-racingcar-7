import Validator from '../src/utils/Validator'
import { errorMessage } from '../src/constants';

describe('Validator', () => {
    test('빈 이름 에러 테스트', () => {
        const inputCarName = '';
        expect(() => {
            Validator.isFiveOrLess(inputCarName);
        }).toThrow(new Error(errorMessage.isFiveOrMoreErrorMessage));
    
    })
})

describe('Validator', () => {
    test('5글자 이상 이름 에러 테스트', () => {
        const inputCarName = 'himynameis';
        expect(() => {
            Validator.isFiveOrLess(inputCarName);
        }).toThrow(new Error(errorMessage.isFiveOrMoreErrorMessage));
    
    })
})

describe('Validator', () => {
    test('숫자가 0일 경우 에러 테스트', () => {
        const inputTime = '0';
        expect(() => {
            Validator.checkInputTime(inputTime);
        }).toThrow(new Error(errorMessage.isZeroErrorMessage));
    
    })
})