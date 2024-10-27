import { Console } from '@woowacourse/mission-utils';
import { isValidCarName, isValidTryNumber } from './is-input-valid.js';

async function getCarName() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    if(!input){
        throw new Error("[ERROR] 입력된 값이 없습니다.");
    }
    if(!isValidCarName(input)){
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 입력 가능합니다.");
    }
    return input.split(',').map(name => name.trim());
}

async function getTryNumber() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    if(!input){
        throw new Error("[ERROR] 입력된 값이 없습니다.");
    }
    if(!isValidTryNumber(input)){
        throw new Error("[ERROR] 시도 횟수는 양수만 입력 가능합니다.");
    }
    return input;
}

export { getCarName, getTryNumber };