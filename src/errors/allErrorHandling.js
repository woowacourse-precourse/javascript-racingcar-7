// 자동차 이름 검증
export function validateCarNames(names) {
    if (names.some(name => name === "")) {
        throw new Error("[ERROR] 필수 입력 항목입니다.");
    }

    if (names.length < 2) {
        throw new Error("[ERROR] 경주할 자동차는 2대 이상이어야 합니다.");
    }

    if (names.some(name => /[^a-zA-Z]/.test(name))) {
        throw new Error("[ERROR] 자동차 이름에는 숫자와 특수문자를 포함할 수 없고, 쉼표로만 자동차 구분이 가능합니다.");
    }

    if (names.some(name => name.length > 5)) {
        throw new Error("[ERROR] 모든 이름이 5글자 이하여야 합니다.");
    }
}

// 시도 횟수 검증
export function validateAttemptsNumber(input) {
    if (input === "") {
        throw new Error("[ERROR] 필수 입력 항목입니다.");
    }

    if (!/^[1-9]\d*$/.test(input)) {  // 1 이상의 숫자만 허용
        if (/[^\d]/.test(input)) {
            throw new Error("숫자만 입력해주세요.");
        } else {
            throw new Error("[ERROR] 1 이상의 숫자만 입력이 가능합니다.");
        }
    }
}
