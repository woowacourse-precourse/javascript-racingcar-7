import { Console } from '@woowacourse/mission-utils'

export default function getInput (question) {
  const response = Console.readLineAsync(question);
  return response;
}