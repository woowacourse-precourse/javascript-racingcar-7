import InputValidation from "../src/validation.js";

describe("validation 클래스 테스트", () => {
  describe("자동차 이름 유효성 검사", () => {
    it("입력받은 자동차 이름의 길이가 5자보다 길면 에러를 반환한다.", () => {
      const mockCarNameList = ["dongdong"];

      expect(() =>
        InputValidation.validateCarNameList(mockCarNameList)
      ).toThrow("[ERROR]");
    });

    it("입력받은 자동차 이름 리스트 중 중복된 이름이 있다면 에러를 반환한다.", () => {
      const mockCarNameList = ["dong", "dong"];

      expect(() =>
        InputValidation.validateCarNameList(mockCarNameList)
      ).toThrow("[ERROR]");
    });
  });
  describe("입력받은 라운드 테스트", () => {
    it("입력받은 라운드가 숫자가 아니라면 에러를 반환한다.", () => {
      const mockAttemptLimitList = [".", "숫자가아닌문자"].map(Number);

      mockAttemptLimitList.forEach((mockAttemptLimit) => {
        expect(() =>
          InputValidation.validateAttemptLimit(mockAttemptLimit)
        ).toThrow("[ERROR]");
      });
    });

    it("입력받은 라운드가 정수가 아니라면 에러를 반환한다.", () => {
      const mockAttemptLimitList = [1.1, 0.2];

      mockAttemptLimitList.forEach((mockAttemptLimit) => {
        expect(() =>
          InputValidation.validateAttemptLimit(mockAttemptLimit)
        ).toThrow("[ERROR]");
      });
    });

    it("입력받은 라운드가 0 미만이라면 에러를 반환한다.", () => {
      const mockAttemptLimitList = [-1];

      mockAttemptLimitList.forEach((mockAttemptLimit) => {
        expect(() =>
          InputValidation.validateAttemptLimit(mockAttemptLimit)
        ).toThrow("[ERROR]");
      });
    });

    it("입력받은 라운드가 infinity나 nan이면 에러를 반환한다.", () => {
      const mockAttemptLimitList = [NaN, Infinity];

      mockAttemptLimitList.forEach((mockAttemptLimit) => {
        expect(() =>
          InputValidation.validateAttemptLimit(mockAttemptLimit)
        ).toThrow("[ERROR]");
      });
    });
  });
});
