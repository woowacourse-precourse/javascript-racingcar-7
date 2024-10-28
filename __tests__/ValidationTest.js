import { isValidCarName, isValidTryNumber } from "../src/functions/is-input-valid.js";

describe('자동차 이름 유효성 검사', () => {
    const validCarName = ['vicky, sarah', '자동차1, 자동차2', '1, 22'];
    const invalidLengthCarName = ['abcdefg, beutiful', '자동차입니다요, 자동차아니에요', '111111, 2222222'];

    test('5자 이하 확인', () => {
       validCarName.forEach((carName) => {
        expect(isValidCarName(carName)).toBe(true);
       });

       invalidLengthCarName.forEach((carName) => {
        expect(isValidCarName(carName)).toBe(false);
       })
    })
})

describe('시도 횟수 유효성 검사', () => {
    test('양의 정수 입력', () => {
        const validTryNumber = [1, 45, 100];
        const invalidTryNumber = [-3, 0, '!^$', 'aaa'];

        validTryNumber.forEach((tryNumber) => {
            expect(isValidTryNumber(tryNumber)).toBe(true);
        });

        invalidTryNumber.forEach((tryNumber) => {
            expect(isValidTryNumber(tryNumber)).toBe(false);
        });
    });
});