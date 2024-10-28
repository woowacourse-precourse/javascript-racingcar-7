class Validate {
    constructor() {}

    static inputValidate(input, type) {
        if (!input) {
            const ERROR_MESSAGE = `[ERROR] ${type} 값을 입력해주세요(Empty Input)`;
            throw new Error(ERROR_MESSAGE);
        }
    }

    static isNumber(value) {
        if(isNaN(value)){
            const ERROR_MESSAGE = `[ERROR] 시도 횟수는 숫자를 입력해주세요(Not Number: ${value})`;
            throw new Error(ERROR_MESSAGE);
        }

        return Number(value);
    }

    static attemptsValidate(attempts, type) {
        Validate.inputValidate(attempts, type);

        attempts = Validate.isNumber(attempts);

        if (!Number.isInteger(attempts)) {
            const ERROR_MESSAGE = `[ERROR] 시도 횟수는 정수를 입력해주세요(Not Integer: ${attempts})`;
            throw new Error(ERROR_MESSAGE);
        }

        if (attempts <= 0) {
            const ERROR_MESSAGE = `[ERROR] 시도 횟수는 양수를 입력해주세요(Not Positive Number: ${attempts})`;
            throw new Error(ERROR_MESSAGE);
        }

        return attempts;
    }

    static nameValidate(name) {
        if (name.length > 5) {
            const ERROR_MESSAGE = `[ERROR] 자동차 이름을 5자 이하로 작성해주세요(Long Name: ${name})`;
            throw new Error(ERROR_MESSAGE);
        }
    }



}

export default Validate;