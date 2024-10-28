import { errorMessages, regex } from './constant.js';
import { checkedValidCarNameLength } from './utils/checkedValidCarNameLength.js';
import Car from './Car.js';

class Validator {
  static validCarInput(string) {
    const trimmedString = string.trim();
    if (regex.invalidCarInputDelimiter.test(trimmedString)) {
      throw new Error(`${errorMessages.prefix} ${errorMessages.invalidDelimiter}`);
    } else if (!regex.validInputName.test(trimmedString)) {
      throw new Error(`${errorMessages.prefix} ${errorMessages.invalidCarInputName}`);
    }

    const names = string.split(',');
    checkedValidCarNameLength(names);
    const cars = names.map((name) => new Car(name));

    return cars;
  }

  static validCountInput(count) {
    const trimmedCount = count.trim();
    if (regex.invalidCountInput.test(trimmedCount) || !trimmedCount) {
      throw new Error(`${errorMessages.prefix} ${errorMessages.invalidCount}`);
    }

    const result = Number(trimmedCount);
    return result;
  }
}

export default Validator;
