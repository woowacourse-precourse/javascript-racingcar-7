import { Console } from '@woowacourse/mission-utils';

export const checkCarInputLength = (carList) => {
	carList.forEach((carName) => {
		if (carName.length > 5) {
			Console.print(`[ERROR]`);
			throw new Error(`자동차 글자수 에러 [ERROR]`);
		}
	});
};
