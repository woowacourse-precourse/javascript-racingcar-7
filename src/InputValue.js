import { Console } from "@woowacourse/mission-utils";

export async function inputNames(){
    const names = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.\n');
    return names.split(',').map(name => name.trim());
}

