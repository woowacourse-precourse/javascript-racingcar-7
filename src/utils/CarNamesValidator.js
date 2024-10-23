class CarNamesValidator {
    checkCarNamesLength(carNames) {
        carNames.forEach((name) => {
            if (name.length > 5) {
                throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
            }
        });
    }
    validateCarNames(carNames) {
        this.checkCarNamesLength(carNames);
    }
}
export default CarNamesValidator;