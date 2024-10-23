class InputValidator {
    static ERROR_MESSAGES = Object.freeze({
        EMPTY: "자동차 이름이 입력되지 않았습니다.",
        INVALID: "자동차 이름은 1~5글자여야 하며, 공백이나 특수 문자는 포함할 수 없습니다.",
        DUPLICATE: "중복되는 자동차 이름이 있습니다.",
    });

    static validateCarNameList(carNameList) {
        const regex = /^[a-zA-Z가-힣0-9]{1,5}$/;

        if (carNameList.length === 0) {
            InputValidator.#throwError(InputValidator.ERROR_MESSAGES.EMPTY);
        } else if (!carNameList.every((carName) => regex.test(carName))) {
            InputValidator.#throwError(InputValidator.ERROR_MESSAGES.INVALID);
        }
        // 중복된 자동차 이름을 체크
        else if (carNameList.length !== new Set(carNameList).size) {
            InputValidator.#throwError(InputValidator.ERROR_MESSAGES.DUPLICATE);
        }
    }

    static validateInputTryCount(tryInputCount) {
        if (isNaN(tryInputCount)) {
            InputValidator.#throwError("시도 횟수는 숫자여야 합니다.");
        } else if (tryInputCount <= 0) {
            InputValidator.#throwError("시도 횟수는 0보다 커야합니다.");
        }
    }

    static #throwError(message) {
        throw new Error(`[ERROR] ${message}`);
    }
}
