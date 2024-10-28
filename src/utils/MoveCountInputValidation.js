import { MoveCountInputErrorMessage } from "../errorMessages.js";

// 자동차 입력 검증
const moveCountInputValidate = (input) => {
    const regex = new RegExp("^\\d+$");
    if (!regex.test(input)) {
        throw new Error(MoveCountInputErrorMessage);
    }
}

export default moveCountInputValidate;