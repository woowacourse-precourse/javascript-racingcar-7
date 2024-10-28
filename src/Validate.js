class Validate {
    static validateCarNames(input) {
      const names = input.split(",").map(name => name.trim());
      if (names.some(name => name.length === 0 || name.length > 5)) {
        throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
      }
      return names;
    }
  
    static validateAttempts(input) {
      const attempts = Number(input);
      if (!Number.isInteger(attempts) || attempts <= 0) {
        throw new Error("[ERROR] 시도 횟수는 양의 정수로 입력해주세요.");
      }
      return attempts;
    }
  }
  
  export default Validate;
  