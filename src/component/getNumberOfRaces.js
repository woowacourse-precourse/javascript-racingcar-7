import { Console } from '@woowacourse/mission-utils';

const getNumberOfRaces = async () => {
   const numberOfRaces = await Console.readLineAsync('경주를 시도할 횟수를 입력해주세요 => ');

   return numberOfRaces;
};

export default getNumberOfRaces;
