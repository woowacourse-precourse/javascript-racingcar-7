import { Console } from '@woowacourse/mission-utils';

export default function readLineAsync(message) {
  return new Promise((resolve, reject) => {
    Console.readLine(message, (input) => {
      try {
        resolve(input);
      } catch (error) {
        Console.print(error.message);
        reject(error);
      }
    });
  });
}
