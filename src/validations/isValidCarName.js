import { eraseWhiteSpace } from './utils/eraseWhiteSpace.js'
import { extractCarName } from "./utils/extractCarName.js";
import { hasDuplicateName } from "./utils/hasDuplicateName.js";
import { isInputEmpty } from "./utils/isInputEmpty.js";
import { isNameLongerThanFive } from "./utils/isNameLongerThanFive.js";

export function isValidCarName(carNameString){
    const carArray = eraseWhiteSpace(extractCarName(carNameString));
    isInputEmpty(carArray);
    hasDuplicateName(carArray);
    isNameLongerThanFive(carArray);
    return carArray;
}