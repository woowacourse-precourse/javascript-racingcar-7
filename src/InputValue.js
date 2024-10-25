import { Console } from "@woowacourse/mission-utils";

export async function inputNames(){
    return await Console.readLineAsync('경주할 자동차 이름을 입력하세요.\n');
}

export function splitName(names){
    return names.split(',').map(name => name.trim());
}





