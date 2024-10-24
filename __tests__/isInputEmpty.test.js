import { isInputEmpty } from '../src/utils/isInputEmpty.js';

describe('isInputEmpty 함수 테스트 : ', () => {
    
    test('빈 배열이 들어올 경우 EMPTY_INPUT_NAME 에러를 발생시킨다.', () => {
        expect(isInputEmpty([])).toThrowError('[ERROR] 빈 문자열은 유효하지 않습니다. 자동차 이름을 입력해주세요.');
    });

    test('빈 배열이 아니므로 에러를 발생시키지 않는다.', () => {
        expect(isInputEmpty(['subsub-e', 'hiiiiiie', '+21@)'])).not.toThrowError();
    });

})