import { validateCarNameCount } from "./validateCarNameCount.js";
import { validateCarNameLength } from "./validateCarNameLength.js";
import { validateCarNameOnlyLetters } from "./validateCarNameOnlyLetters.js";
import { validateDuplicateCarNames } from "./validateDuplicateCarNames.js";

export function validateCarName(inputCarName) {
  const inputCarNameArray = inputCarName.split(",");
  validateCarNameLength(inputCarNameArray);
  validateCarNameOnlyLetters(inputCarNameArray);
  validateCarNameCount(inputCarNameArray);
  validateDuplicateCarNames(inputCarNameArray);
}
