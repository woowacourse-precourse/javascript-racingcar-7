import InputView from "../view/InputView.js";
import CarNameValidations from "../validations/CarNameValidations.js";
import parseStringToArray from "../utils/parseStringToArray.js";

const getValidatedCarNames = async () => {
  const carNamesInput = await InputView.readCarNameInput();
  const carNames = parseStringToArray(carNamesInput);
  CarNameValidations(carNames);
  return carNames;
}

export default getValidatedCarNames;