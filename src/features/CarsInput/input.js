import { Console } from '@woowacourse/mission-utils';

const userInput = async () => {
  return await Console.readLineAsync(
    '경주할 자동차 이름을 쉼표를 기준으로 입력해주세요: ',
  );
};

export default userInput;
