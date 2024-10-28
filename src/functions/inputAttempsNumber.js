import { Console } from '@woowacourse/mission-utils';
import { validateAttemptsNumber } from '../errors/allErrorHandling.js';

export async function inputAttemptsNumber() {
    return new Promise((resolve, reject) => {
        Console.readLine('시도할 횟수는 몇 회인가요?\n', (input) => {
            try {
                validateAttemptsNumber(input);
                resolve(parseInt(input, 10));
            } catch (error) {
                reject(error);
            }
        });
    });
}
