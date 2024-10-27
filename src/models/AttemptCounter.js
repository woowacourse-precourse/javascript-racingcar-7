import AttemptCounterError from "../errors/AttemptCounterError.js";
import { ERROR_MESSAGE } from "../constants/errorMessages.js";

class AttemptCounter {

    #attemptCount;

    constructor(attemptCount) {
        this.#attemptCount = Number(attemptCount);
        this.validate();
    }

    static getAttemptCount(inputAttempCount) {
        const attemptCounterInstantce = new AttemptCounter(inputAttempCount);
        return attemptCounterInstantce.#attemptCount;
    }

    validate() {
        this.validateMoveCountIsNumber();
        this.validateMoveCountIsNotZero();
        this.validateMoveCountWhitespace();
        this.validateMoveCountIsPositiveInteger();
    }

    // 이동 횟수가 숫자가 아닌 경우
    validateMoveCountIsNumber() {
        if(isNaN(this.#attemptCount)) {
            throw new AttemptCounterError(ERROR_MESSAGE.input_attempt_count_is_number);
        }
    }

    // 이동 횟수가 0인 경우
    validateMoveCountIsNotZero() {
        if(this.#attemptCount === 0) {
            throw new AttemptCounterError(ERROR_MESSAGE.input_attempt_count_is_not_zero);
        }
    }

    // 이동 횟수에 공백이 들어간 경우
    validateMoveCountWhitespace() {
        if(/\s/.test(this.#attemptCount)) {
            throw new AttemptCounterError(ERROR_MESSAGE.input_attempt_count_whitespace);
        }
    }

    // 이동 횟수가 양의 정수인지 확인하는 경우
    validateMoveCountIsPositiveInteger() {
        if(Number.isInteger(this.#attemptCount) && this.#attemptCount < 0) {
            throw new AttemptCounterError(ERROR_MESSAGE.input_attempt_count_positive_integer);
        }
    }
}

export default AttemptCounter;