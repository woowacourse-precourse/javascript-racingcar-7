import { Console, Random } from '@woowacourse/mission-utils';

const playGame = async (cars, numberOfRaces) => {
   const distances = cars.map(() => '');
   Console.print('실행 결과');
   for (let i = 0; i < numberOfRaces; i++) {
      for (let j = 0; j < cars.length; j++) {
         const randomNumber = Random.pickNumberInRange(0, 9);
         if (randomNumber >= 4) {
            distances[j] += '-';
         }
      }

      cars.forEach((car, index) => {
         Console.print(`${car} : ${distances[index]}`);
      });
      Console.print('');
   }
   const maxDistance = Math.max(...distances.map((distance) => distance.length));
   const winners = cars.filter((_, index) => distances[index].length === maxDistance);

   return winners;
};

export default playGame;
