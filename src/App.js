import { Console } from "@woowacourse/mission-utils";
import { Car } from "./Car";

class App {

  async run() {

    while (true) {
      //1. 자동차 input

      Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)")
      const carsInput = await Console.readLineAsync()
      
      if (carsInput.length ===0) {
        throw new Error('[ERROR] 입력된 자동차가 없습니다.')
      }

      const carNames = carsInput.split(",").map((name)=> name)

      carNames.forEach(name => {
        if (name.length > 5 ) {
          throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.')
        }
      });
      
      //2. 횟수 input
      Console.print("시도할 횟수는 몇 회인가요?")
      const tryCountInput = Console.readLineAsync()
      const tryCount = parseInt(tryCountInput, 10)


      if (isNaN(tryCount) || tryCount<=0) {
        throw new Error('[ERROR] 1회 이상의 시도횟수를 입력하세요')
      }
      

      const cars = carNames.map(name => new Car(name))

      for (let i=1; i<=tryCount; i++) {
        cars.forEach((car)=>{
          const randomNumer = MissionUtils.Random.pickNumberInRange(0,9)
          if (randomNumer >= 4) {
            car.plusCount();
          }
        })
      }

      break;

    //   printCarCount(car) {
    //     console.Print(`${car.name} : ${'_' * car.moveCount}`)
    //   }

    //   printWinner(cars) 
  
    // }
    }





  }
}

export default App;
