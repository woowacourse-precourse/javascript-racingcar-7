class Validate {
    constructor() {}

    static inputValidate(input, type) {
        if (!input) {
            const errMessage = `[ERROR] ${type} 값을 입력해주세요(Empty Input)`;
            throw new Error(errMessage);
        }
    }

    static isNumber(value) {
        if(isNaN(value)){
            const errMessage = `[ERROR] 시도 횟수는 숫자를 입력해주세요(Not Number: ${value})`;
            throw new Error(errMessage);
        }

        return Number(value);
    }

    static attemptsValidate(attempts, type) {
        Validate.inputValidate(attempts, type);

        attempts = Validate.isNumber(attempts);

        if (!Number.isInteger(attempts)) {
            const errMessage = `[ERROR] 시도 횟수는 정수를 입력해주세요(Not Integer: ${attempts})`;
            throw new Error(errMessage);
        }

        return attempts;
    }

    static nameValidate(name) {
        if (name.length > 5) {
            const errMessage = `[ERROR] 자동차 이름을 5자 이하로 작성해주세요(Long Name: ${name})`;
            throw new Error(errMessage);
        }
    }



}

export default Validate;