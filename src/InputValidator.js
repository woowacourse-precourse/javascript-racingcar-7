    class InputValidator {
        // 자동차 이름 배열을 확인하여 각 이름이 5자 이하인지 검사
        validateCarNames(carNames) {
            try {
                carNames.forEach(name => {
                    if (name.length > 5) {
                        throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.");
                    }
                });
            } catch (error) {
                console.error(error.message);
                return
            }
        }
    
        // 시도 횟수가 양의 정수인지 확인
        validateAttempts(attempts) {
            try {
                if (attempts <= 0) {
                    throw new Error("[ERROR] 경주 시도 횟수는 양수여야 합니다.");
                }
            } catch (error) {
                console.error(error.message);
                return
            }
        }
    }
    