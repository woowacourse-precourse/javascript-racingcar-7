import getCarName from './component/getCarName.js';
import getNumberOfRaces from './component/getNumberOfRaces.js';
class App {
   async run() {
      try {
         this.carsName = await getCarName();
         console.log('입력한 자동차 이름:', this.carsName); // => getCarName에서 return한 값
         this.numberOfRaces = await getNumberOfRaces();
         console.log('시도할 횟수:', this.numberOfRaces);
      } catch (err) {
         console.log('error', err);
      }
   }
}

export default App;
