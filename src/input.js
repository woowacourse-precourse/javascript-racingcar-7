import { Console } from "@woowacourse/mission-utils";

export function input(message) {
  return Console.readLineAsync(message);
}
