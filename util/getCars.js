import { checkName } from "./error/checkName";
import { checkInput } from "./error/checkInput";

async function getCars() {
    const inputValue = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    checkInput(inputValue);

    const cars = inputValue.split(',').map((car) => car.trim()); // 자동차 이름을 배열에 저장
    checkName(cars);

    return cars;
}

export default getCars;