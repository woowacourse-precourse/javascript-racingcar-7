import { errorMessages, regex } from './constant.js';
import { checkedValidCarNameLength } from './utils/checkedValidCarNameLength.js';
import Car from './Car.js';

class Validator {
  static validCarInput(string) {
    if (regex.invalidCarInputDelimiter.test(string)) {
      throw new Error(`${errorMessages.prefix} ${errorMessages.invalidDelimiter}`);
    } else if (!regex.validInputName.test(string)) {
      throw new Error(`${errorMessages.prefix} ${errorMessages.invalidCarInputName}`);
    }

    const names = string.split(',');
    checkedValidCarNameLength(names);
    const cars = names.map((name) => new Car(name));

    return cars;
  }

  static validCountInput(count) {
    if (!count) {
      throw new Error(`${errorMessages.prefix} ${errorMessages.invalidCount}`);
    }

    return count;
  }
}

export default Validator;
