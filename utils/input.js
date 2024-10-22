import { MissionUtils } from '@woowacourse/mission-utils';

export default async function input(sentence) {
    try {
        const inputValue = await MissionUtils.Console.readLineAsync(
            `${sentence}\n`
        );

        return inputValue;
    } catch (error) {
        throw new Error('[ERROR]');
    }
}
