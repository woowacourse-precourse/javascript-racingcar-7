import Validator from '../src/utils/Validator'
import { errorMessage } from '../src/constants';

describe('Validator', () => {
    test('이름 에러 테스트', () => {
        // 각 자동차의 progress를 업데이트하는 함수를 호출
        const inputCarName = ['one','','two'];
        expect(() => {
            Validator.isFiveOrLess(inputCarName);
        }).toThrow(new Error(errorMessage.isFiveOrMoreErrorMessage));
    
    })
})