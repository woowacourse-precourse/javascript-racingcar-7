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

export async function carNameInputHandler() {
	const carName = await Console.readLineAsync(
		`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`
	);
	checkEmptyInput(carName);

	const carList = carListValidate(carName);
	return carList;
}

export async function tryNumberHandler() {
	const tryNumber = await Console.readLineAsync(`시도할 횟수는 몇 회인가요?\n`);
	checkEmptyInput(tryNumber);
	return tryNumber;
}
