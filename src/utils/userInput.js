import { Console } from '@woowacourse/mission-utils';
import { checkCarInputLength } from '../errors/carError.js';
import { checkEmptyInput } from '../errors/commonError.js';

const carListValidate = (carName) => {
	const carList = carName.split(',');
	const carListSet = new Set(carList);
	const nonDuplicateCarList = [...carListSet];

	checkCarInputLength(nonDuplicateCarList);
	return nonDuplicateCarList;
};
