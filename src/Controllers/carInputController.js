import { getCarNamesInput, getRacingCountInput } from '../Views/inputView.js';
import carNamesLengthValidator from '../Models/validations/carNamesValidator.js';
import { Console } from '@woowacourse/mission-utils';
import splitAndTrimCarName from '../Models/validations/carNamesTrimmer.js';

const carNamesInput = await getCarNamesInput();

const trimedCarNames = splitAndTrimCarName(carNamesInput);

if (carNamesLengthValidator(trimedCarNames)) {
  Console.print('[true]입니다.');
}

if (carNamesLengthValidator(trimedCarNames) === false) {
  Console.print('[Error] 6자 이내로 쓰세여.');
}
