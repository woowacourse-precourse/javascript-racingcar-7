import { validateCarNameCount } from "./validateCarNameCount.js";
import { validateCarNameLength } from "./validateCarNameLength.js";
import { validateCarNameSeparator } from "./validateCarNameSeparator.js";
import { validateDuplicateCarNames } from "./validateDuplicateCarNames.js";
import { validateCarNameOnlyLetters } from "./validateCarNameOnlyLetters.js";

export function validateCarName(inputCarName) {
  const inputCarNameArray = inputCarName.split(",");
  validateCarNameSeparator(inputCarNameArray);
  validateCarNameLength(inputCarNameArray);
  validateCarNameOnlyLetters(inputCarNameArray);
  validateCarNameCount(inputCarNameArray);
  validateDuplicateCarNames(inputCarNameArray);
}
