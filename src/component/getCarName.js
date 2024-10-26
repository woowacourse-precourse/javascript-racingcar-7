import { Console } from '@woowacourse/mission-utils';

const getCarName = async () => {
   let carsName = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
   const carName = carsName.replace(/ /g, '').split(',');
   carName.forEach((car) => {
      if (car.length > 5) {
         throw new Error('[Error] 자동차 이름을 5자 이하로 작성해주세요');
      }
   });

   if (carsName.length === 0) {
      throw new Error('[Error] 자동차 이름을 입력해주세요');
   }

   // Console.print(carName.toString());

   return carName;
};

export default getCarName;
