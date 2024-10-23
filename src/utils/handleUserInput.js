import { MissionUtils } from "@woowacourse/mission-utils";
import { validateCars } from "./validate.js";

export default async function handleUserInput() {
    const carNameInput = await getCarName();
    const carName = validateCars(carNameInput);
    const executionCount = await getExecutionCount();
    const cars = { carName, executionCount };

    return cars;
}

async function getCarName() {
    const carNameInput = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력해주세요.(5자 이하, 여러 대일 경우 쉼표로 구분)\n');

    return carNameInput;
}

async function getExecutionCount() {
    const userInput = await MissionUtils.Console.readLineAsync('시도할 횟수를 입력해주세요.\n');
    const executionCount = parseInt(userInput);
    
    return executionCount;
}