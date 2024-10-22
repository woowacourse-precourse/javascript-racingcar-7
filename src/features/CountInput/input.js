import { Console } from '@woowacourse/mission-utils';

const userInput = async () => {
  return await Console.readLineAsync('시도할 횟수를 입력해주세요: ');
};

export default userInput;
