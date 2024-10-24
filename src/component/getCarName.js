import { Console } from '@woowacourse/mission-utils';

const getCarName = async () => {
   let carsName = await Console.readLineAsync('자동차 이름을 입력해주세요 => ');
   const carName = carsName.split(',');
   carName.forEach((car) => {
      if (car.length > 5) {
         //5자 이하로 작성해주세요
         throw new Error('[Error] 자동차 이름을 5자 이하로 작성해주세요');
      }
   });

   return carName.toString();
};

export default getCarName;
