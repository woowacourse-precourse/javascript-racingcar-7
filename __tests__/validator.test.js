import carsInputValidate from '../src/utils/CarsInputValidator.js';
import moveCountInputValidate from '../src/utils/MoveCountInputValidation.js';
import { CarInputErrorMessage, MoveCountInputErrorMessage } from '../src/errorMessages.js';

describe("자동차 입력 검증 함수 테스트", () => {
    test("자동차 입력 검증(성공)", () => {
        expect(carsInputValidate("pobi,woni,jun")).toBeUndefined();
    });
    
    test("자동차 입력 검증(실패) - 연속 구분자", () => {
        expect(() => carsInputValidate("pobi,,woni,jun")).toThrow(CarInputErrorMessage);
    });
    
    test("자동차 입력 검증(실패) - 해당 없는 문자", () => {
        expect(() => carsInputValidate("pobi,woni,jun;")).toThrow(CarInputErrorMessage);
    });

    test("자동차 입력 검증(실패) - 6자 이상의 이름", () => {
        expect(() => carsInputValidate("pobipobi,woni,jun")).toThrow(CarInputErrorMessage);
    });
})

describe("이동 횟수 검증 테스트", () => {
    test("이동 횟수 검증(성공)", () => {
        expect(moveCountInputValidate("10")).toBeUndefined();
    });

    test("이동 횟수 검증(실패) - 숫자 외의 문자", () => {
        expect(() => moveCountInputValidate("a+")).toThrow(MoveCountInputErrorMessage);
    });
})