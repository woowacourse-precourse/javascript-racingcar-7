import { Console } from '@woowacourse/mission-utils';

const getNumberOfRaces = async () => {
   const numberOfRaces = await Console.readLineAsync('경주를 시도할 횟수를 입력해주세요 => ');

   // if (numberOfRaces.length === 0) {
   //    throw new Error('[Error] 횟수가 입력되지 않았습니다');
   // } else if (typeof numberOfRaces !== number) {
   //    throw new Error('[Error] 숫자로 입력해주세요');
   // }

   if (numberOfRaces.length === 0) {
      throw new Error('[Error] 횟수가 입력되지 않았습니다');
   }

   const parseNumberOfRaces = Number(numberOfRaces);

   if (isNaN(parseNumberOfRaces)) {
      throw new Error('[Error] 숫자로 입력해주세요');
   }

   return numberOfRaces;
};
export default getNumberOfRaces;
