import { validateCarName } from '../../src/validators.js';

describe("validators 테스트", () => {

  describe("validateCarName() 테스트", () => {

    test("자동차 이름은 5자 이하만 가능하다", () => {
      expect(() => {
        validateCarName("Ferrari,Mercedes,Audi,Porsche,BMW,LongNameCar"); 
      }).toThrow("[ERROR]");
    });

    test("자동차 이름이 존재해야 한다 (빈 문자열일 경우)", () => {
      expect(() => {
        validateCarName(""); 
      }).toThrow("[ERROR]");
    });

    test("자동차 이름은 중복되어서는 안된다", () => {
      expect(() => {
        validateCarName("BMW,Audi,BMW"); 
      }).toThrow("[ERROR]");
    });

    test("유효한 자동차 이름을 입력했을 때는 예외가 발생하지 않아야 한다", () => {
      expect(() => {
        validateCarName("Audi,BMW,Hyundai,Kia"); 
      }).not.toThrow();
    });
  });
});
