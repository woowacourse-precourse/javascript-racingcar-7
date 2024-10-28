import { Console } from '@woowacourse/mission-utils';

const getNumberOfRaces = async () => {
   const numberOfRaces = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

   if (numberOfRaces.length === 0) {
      throw new Error('[ERROR] 횟수가 입력되지 않았습니다');
   }

   const parseNumberOfRaces = Number(numberOfRaces);

   if (isNaN(parseNumberOfRaces)) {
      throw new Error('[ERROR] 숫자로 입력해주세요');
   }

   if (numberOfRaces < 0) {
      throw new Error('[ERROR] 횟수는 양수로 작성해주세요');
   }

   return numberOfRaces;
};
export default getNumberOfRaces;
