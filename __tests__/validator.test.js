import carsInputValidate from '../src/utils/CarsInputValidator.js';
import { CarInputErrorMessage } from '../src/errorMessages.js';

describe("검증 함수 테스트", () => {
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