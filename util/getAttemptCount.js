export async function getAttemptCount() {
    const inputValue = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    return Number(inputValue);
}