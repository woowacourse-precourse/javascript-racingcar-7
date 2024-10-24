class InputValidator {
    static ERROR_MESSAGES = Object.freeze({
        CAR_NAME_EMPTY: "자동차 이름이 입력되지 않았습니다.",
        INVALID_NAME: "자동차 이름은 1~5글자여야 하며, 공백이나 특수 문자는 포함할 수 없습니다.",
        DUPLICATED_NAME: "중복되는 자동차 이름이 있습니다.",
        TRY_COUNT_EMPTY: "시도 횟수가 입력되지 않았습니다.",
        INVALID_TRY_COUNT: "시도 횟수는 1 이상의 정수여야 합니다.",
    });

    static validateCarNameList(carNameList) {
        const regex = /^[a-zA-Z가-힣0-9]{1,5}$/;

        if (carNameList.length === 0) {
            InputValidator.#throwError(InputValidator.ERROR_MESSAGES.CAR_NAME_EMPTY);
        } else if (!carNameList.every((carName) => regex.test(carName))) {
            InputValidator.#throwError(InputValidator.ERROR_MESSAGES.INVALID_NAME);
        }
        // 중복된 자동차 이름을 체크
        else if (carNameList.length !== new Set(carNameList).size) {
            InputValidator.#throwError(InputValidator.ERROR_MESSAGES.DUPLICATED_NAME);
        }
    }

    static validateInputTryCount(tryInputCount) {
        if (tryInputCount === "") {
            InputValidator.#throwError(InputValidator.ERROR_MESSAGES.TRY_COUNT_EMPTY);
        }

        const tryCount = Number(tryInputCount);
        if (!Number.isInteger(tryCount) || tryCount < 1) {
            InputValidator.#throwError(InputValidator.ERROR_MESSAGES.INVALID_TRY_COUNT);
        }
    }

    static #throwError(message) {
        throw new Error(`[ERROR] ${message}`);
    }
}

export default InputValidator;
