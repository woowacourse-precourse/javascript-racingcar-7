import {
  EMPTY_CAR_NAME_ERROR,
  MORE_THAN_FIVE_LETTERS,
  SAME_CAR_NAME_ERROR,
  ONE_CAR_NAME_ERROR,
} from '../constants/Error';

export default function isValidName(input) {
  if (input === '') {
    throw new Error(EMPTY_CAR_NAME_ERROR);
  }
  const carList = input.split(',');
  carList.forEach(car => {
    if (car.length > 5) {
      throw new Error(MORE_THAN_FIVE_LETTERS);
    }
  });
  if (carList.length > 1) {
    const carSet = new Set(carList);

    if (carList.length !== carSet.size) {
      throw new Error(SAME_CAR_NAME_ERROR);
    }
    return true;
  }
  if (carList.length === 1) {
    throw new Error(ONE_CAR_NAME_ERROR);
  }
  return true;
}
