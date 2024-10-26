import { validateCarName, validateAttemptCount } from '../../src/validators.js';

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

  describe("validateAttemptCount() 테스트", () => {

    const INVALID_ATTEMPTS_COUNT_CASES = [
      // 숫자가 아닌 값을 넣었을 때
      "1e",
      "1234q",
      
      // 0일 때
      "0",
      
      // 0보다 작은 값일 때
      "-1",
      "-100",
      
      // 정수가 아닌 값일 때
      "1.5",
      "3.14",
    ];
    
    test("시도할 횟수를 입력해야 한다 (빈 문자열일 경우)", () => {
      expect(() => {
        validateAttemptCount(""); 
      }).toThrow("[ERROR]");
    });

    test.each(INVALID_ATTEMPTS_COUNT_CASES)(
      "시도 횟수에는 양의 정수값만 입력해야 한다",
      (input) => {
        expect(() => {
          validateAttemptCount(input);
        }).toThrow("[ERROR]");
      }
    );
  });
});
