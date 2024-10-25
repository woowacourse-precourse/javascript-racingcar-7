import { Console } from "@woowacourse/mission-utils";

const LIMIT_CAR_NAME_LEN = 5;

export async function inputNames(){
    return await Console.readLineAsync('경주할 자동차 이름을 입력하세요.\n');
}

export function splitName(names){
    return names.split(',').map(name => name.trim());
}

export function inputNameValidation(name){
    if (name.length > LIMIT_CAR_NAME_LEN){
        throw new Error("[ERROR] 자동차 이름의 제한 글자 수 5자를 초과하였습니다.");
    }
    if (name.length === ''){
        throw new Error("[ERROR] 자동차 이름을 입력해야 합니다.");
    }
}



