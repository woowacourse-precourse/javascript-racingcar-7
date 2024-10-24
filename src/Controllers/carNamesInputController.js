import { Console } from '@woowacourse/mission-utils';
import { isCarNamesInputNotEmpty, carNamesLengthValidator } from '../Models/validations/carNamesValidator.js';

const validateCarNamesLength = spliteAndtrimmedCarName => {
  if (carNamesLengthValidator(spliteAndtrimmedCarName)) {
    return true;
  }

  if (carNamesLengthValidator(spliteAndtrimmedCarName) === false) {
    Console.print('[Error] 자동차 이름이 5자를 초과하였습니다. 5자 이하만 가능합니다.');
  }
};

export default validateCarNamesLength;
