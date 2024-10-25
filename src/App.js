import {  Console   } from "@woowacourse/mission-utils";
import Car from "./Car.js";


class App {



  async run() {
    try{
      const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'); // pobi,woni,jun
      // *자동차는 (,) 쉼표를 기준으로 배열로 만들어준다.
      const carInputNameArray = cars.split(',');// [pobi,woni,jun]
      console.log(carInputNameArray);

      // * 자동차 객체 배열을 만든다. 
      const carArray = carInputNameArray.map( 
        (nameElement, index) => (new Car({name:nameElement}))
      );


      
    
    } catch(error) {
      return Promise.reject(error); // 예외 던지기
    }
  }
}

export default App;
