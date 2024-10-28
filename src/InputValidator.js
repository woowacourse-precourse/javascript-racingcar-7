class InputValidator {
    // 자동차 이름 배열을 확인하여 각 이름이 5자 이하인지 검사
    validateCarNames(carNames) {
        for (const name of carNames) {
            if (name.length > 5) {
                throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.");
            }
        }
        return true; 
    }

    // 시도 횟수가 양의 정수인지 확인
    validateAttempts(attempts) {
        if (attempts <= 0) {
            throw new Error("[ERROR] 경주 시도 횟수는 양수여야 합니다.");
        }
        return true; 
    }
}

export default  InputValidator