import { MissionUtils } from '@woowacourse/mission-utils';

export default async function input(sentence, checkError) {
    try {
        const inputValue = await MissionUtils.Console.readLineAsync(
            `${sentence}\n`
        );
        if (checkError(inputValue) === 'error') throw new Error('[ERROR]');
        return inputValue;
    } catch (error) {
        throw new Error('[ERROR]');
    }
}
