import { validateCarNameLength } from "./validateCarName/validateCarNameLength.js";
import { validateCarNameOnlyLetters } from "./validateCarName/validateCarNameOnlyLetters.js";
import { validateCarNameCount } from "./validateCarName/validateCarNameCount.js";

export function validateCarName(inputCarName) {
  const inputCarNameArray = inputCarName.split(",");
  validateCarNameLength(inputCarNameArray);
  validateCarNameOnlyLetters(inputCarNameArray);
  validateCarNameCount(inputCarNameArray);
}
