import { CarInputErrorMessage } from "../errorMessages.js";

// 자동차 입력 검증
const carsInputValidate = (input) => {
    const regex = new RegExp("^(?:[a-zA-Z]{1,5})(?:,[a-zA-Z]+){1,5}$");
    if (!regex.test(input)) {
        throw new Error(CarInputErrorMessage);
    }
}

export default carsInputValidate;