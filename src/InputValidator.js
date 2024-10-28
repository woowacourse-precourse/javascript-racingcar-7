class InputValidator {
    // 자동차 이름 배열을 확인하여 이름의 유효성을 검사
    validateCarNames(carNames) {
      // 이름이 비어있는 경우
      if (!carNames || carNames.length === 0) {
        throw new Error('[ERROR] 자동차 이름이 비어 있습니다.');
      }
  
      const uniqueNames = new Set();
      for (const name of carNames) {
        // 특수 문자가 포함된 경우
        if (/[^a-zA-Z0-9]/.test(name)) {
          throw new Error('[ERROR] 자동차 이름에 특수 문자는 포함될 수 없습니다.');
        }
  
        // 이름이 5자 이상인 경우
        if (name.length > 5) {
          throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.');
        }
  
        // 이름이 중복된 경우
        if (uniqueNames.has(name)) {
          throw new Error('[ERROR] 자동차 이름이 중복되었습니다.');
        }
  
        uniqueNames.add(name);
      }
  
      return true;
    }
  
    // 시도 횟수가 양의 정수인지 확인
    validateAttempts(attempts) {
      // 시도 횟수가 숫자가 아닌 경우
      if (isNaN(attempts)) {
        throw new Error('[ERROR] 횟수는 숫자여야 합니다.');
      }
  
      // 시도 횟수가 양수가 아닌 경우
      if (attempts <= 0) {
        throw new Error('[ERROR] 횟수는 양수여야 합니다.');
      }
  
      return true;
    }
  }
  
  export default InputValidator;
  