class CarNamesValidator {
    checkCarNamesLength(carNames) {
        carNames.forEach((name) => {
            if (name.length > 5) {
                throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
            }
        });
    }

    checkEmptyCarName(carNames) {
        carNames.forEach((name) => {
            if (name === "" || name === null) {
                throw new Error("[ERROR] 자동차 이름은 빈 문자열일 수 없습니다.");
            }
        });
    }

    validateCarNames(carNames) {
        this.checkCarNamesLength(carNames);
        this.checkEmptyCarName(carNames);
    }
}
export default CarNamesValidator;