import { MissionUtils } from "@woowacourse/mission-utils";
import { validateCars, validateCount }  from "./validate.js";

export default async function handleUserInput() {
    const carNameInput = await getCarName();
    const cars = validateCars(carNameInput);
    const countInput = await getExecutionCount();
    const executionCount = validateCount(countInput);
    
    const carAndCount = { cars, executionCount };

    return carAndCount;
}

async function getCarName() {
    const carNameInput = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력해주세요.(5자 이하, 여러 대일 경우 쉼표로 구분)\n');

    return carNameInput;
}

async function getExecutionCount() {
    const executionCount = await MissionUtils.Console.readLineAsync('시도할 횟수를 입력해주세요.(1 <= n <= 100)\n');

    return executionCount;
}