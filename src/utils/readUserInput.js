import { Console } from '@woowacourse/mission-utils';

export async function readUserInput(message, validators = []) {
  try {
    const input = await Console.readLineAsync(`${message}\n`);

    validators.forEach((validator) => {
      if (validator(input) === false) {
        throw new Error();
      }
    });

    return input;
  } catch (error) {
    throw new Error('잘못된 입력이에요.');
  }
}
