import { Console } from '@woowacourse/mission-utils'

export default async function getInput (question) {
  const response = await Console.readLineAsync(question);
  return response;
}