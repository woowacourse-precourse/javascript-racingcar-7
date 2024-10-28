class RoundValidator {
  static validate(input) {
    // 입력이 비어있는 경우 처리
    if (input.trim() === "") {
      throw new Error("[ERROR] 시도 횟수를 입력해주세요.");
    }

    // 입력값을 숫자로 변환
    const rounds = Number(input);

    // 입력값이 양의 정수가 아닐 경우 처리
    if (!Number.isInteger(rounds) || rounds <= 0) {
      throw new Error("[ERROR] 양의 정수로 된 시도횟수를 입력하세요.");
    }

    return rounds; // 유효한 시도 횟수 반환
  }
}

export default RoundValidator;
