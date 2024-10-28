import { Console } from '@woowacourse/mission-utils';
import getCarName from './component/getCarName.js';
import getNumberOfRaces from './component/getNumberOfRaces.js';
import playGame from './component/playGame.js';

class App {
   async run() {
      try {
         const carNames = await getCarName();
         const numberOfRaces = await getNumberOfRaces();
         const winners = await playGame(carNames, numberOfRaces);
         Console.print(`최종 우승자 : ${winners.join(', ')}`);
      } catch (err) {
         throw new Error(`[ERROR] ${err.message}`);
      }
   }
}

export default App;
