import { validateCarNameCount } from "./validateCarNameCount";
import { validateCarNameLength } from "./validateCarNameLength";
import { validateCarNameOnlyLetters } from "./validateCarNameOnlyLetters";

export function validateCarName(inputCarName) {
  const inputCarNameArray = inputCarName.split(",");
  validateCarNameLength(inputCarNameArray);
  validateCarNameOnlyLetters(inputCarNameArray);
  validateCarNameCount(inputCarNameArray);
}