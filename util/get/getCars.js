import { Console } from "@woowacourse/mission-utils";

import { checkCarName } from "../validation/checkCarName.js";

export async function getCars() {
    const inputValue = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

    const cars = inputValue.split(',').map((car) => car.trim()); // 자동차 이름을 배열에 저장
    
    checkCarName(cars);

    return cars;
}
