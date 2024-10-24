export default class InputValidator {
    static validateCarNames(names) {
      const carNames = names.split(',').map(name => name.trim());
      
      if (carNames.some(name => name.length > 5)) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
      
      if (carNames.some(name => name.length === 0)) {
        throw new Error("[ERROR] 자동차 이름은 빈 값일 수 없습니다.");
      }
      
      if (new Set(carNames).size !== carNames.length) {
        throw new Error("[ERROR] 중복된 이름이 존재합니다.");
      }
      
      return carNames;
    }
  
    static validateAttempts(attempts) {
      const number = Number(attempts);
      
      if (isNaN(number)) {
        throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
      }
      
      if (number <= 0) {
        throw new Error("[ERROR] 시도 횟수는 0보다 커야 합니다.");
      }
      
      return number;
    }
  }