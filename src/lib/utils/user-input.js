import { Console } from '@woowacourse/mission-utils';

export const userInput = async () => {
  const cars = await Console.readLineAsync(
    '경주할 자동차 이름을 쉼표를 기준으로 입력해주세요: ',
  );

  const count = await Console.readLineAsync('이동할 횟수를 입력해주세요: ');

  return { cars, count };
};
