class Validate {
    constructor() {}

    static nameValidate(name) {
        if (name.length > 5) {
            const errMessage = `[ERROR] 자동차 이름을 5자 이하로 작성해주세요(Long Name: ${name})`;
            throw new Error(errMessage);
        }
    }



}

export default Validate;