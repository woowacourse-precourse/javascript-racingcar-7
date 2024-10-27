import InputValidator from "../src/InputValidator";

describe("사용자 입력 자동차 이름 검증 테스트", () => {
  test("입력값이 양의 정수라면 true를 리턴할 수 있다.", () => {
    const inputs = [1, 5, 10];

    inputs.forEach((input) => {
      expect(() => InputValidator.checkPositive(input)).toBeTruthy();
    });
  });

  test("입력값이 양의 정수가 아니라면 Error를 발생시킬 수 있다.", () => {
    const inputs = [-1, 0, NaN];

    inputs.forEach((input) => {
      expect(() => InputValidator.checkPositive(input)).toThrow("[ERROR]");
    });
  });

  test("중복 이름이 있으면 Error를 발생시킬 수 있다.", () => {
    const inputs = [
      ["kim", "kim", "ronaldo"],
      ["lee", "lee", "ronaldo"],
    ];

    inputs.forEach((input) => {
      expect(() => InputValidator.checkDuplication(input)).toThrow("[ERROR]");
    });
  });

  test("중복 이름이 없으면 true를 리턴할 수 있다.", () => {
    const inputs = [
      ["kim", "lee", "ronaldo"],
      ["lee", "son", "ronaldo"],
    ];

    inputs.forEach((input) => {
      expect(() => InputValidator.checkDuplication(input)).toBeTruthy();
    });
  });

  test("길이가 5를 넘는 이름이 있으면 Error를 발생시킬 수 있다.", () => {
    const inputs = [
      ["kim", "lee", "ronaldo"],
      ["kim", "son", "jidane"],
    ];

    inputs.forEach((input) => {
      expect(() => InputValidator.checkNameLength(input)).toThrow("[ERROR]");
    });
  });

  test("길이가 5를 넘는 이름이 없으면 true를 리턴할 수 있다.", () => {
    const inputs = [
      ["kim", "lee", "re"],
      ["kim", "son", "pobi"],
    ];

    inputs.forEach((input) => {
      expect(() => InputValidator.checkNameLength(input)).toBeTruthy();
    });
  });

  test("이름이 하나만 있으면 Error를 발생시킬 수 있다.", () => {
    const inputs = [["kim"], ["son"]];

    inputs.forEach((input) => {
      expect(() => InputValidator.checkMultiple(input)).toThrow("[ERROR]");
    });
  });

  test("이름이 두 개 이상 있다면 true를 리턴할 수 있다.", () => {
    const inputs = [
      ["kim", "son"],
      ["son", "johnson", "romero"],
    ];

    inputs.forEach((input) => {
      expect(() => InputValidator.checkMultiple(input)).toBeTruthy();
    });
  });

  test("이름이 공백이라면 Error를 발생시킬 수 있다.", () => {
    const inputs = [[""], [" "], ["  "]];

    inputs.forEach((input) => {
      expect(() => InputValidator.checkBlank(input)).toThrow("[ERROR]");
    });
  });

  test("이름이 공백이 아니라면 true를 리턴할 수 있다.", () => {
    const inputs = [
      ["kim", "lee", "re"],
      ["kim", "son", "pobi"],
    ];

    inputs.forEach((input) => {
      expect(() => InputValidator.checkBlank(input)).toBeTruthy();
    });
  });
});
