class CountNumValidator {
    checkCountNumIsNonePositiveNumber(countNum) {
        console.log(countNum)
        if (isNaN(countNum) || countNum <= 0 || countNum === "") {
            throw new Error("[ERROR] 실행 횟수는 1 이상의 양수여야 합니다.");
        }
    }

    validateCountNum(countNum) {
        this.checkCountNumIsNonePositiveNumber(countNum);
    }
}
export default CountNumValidator;