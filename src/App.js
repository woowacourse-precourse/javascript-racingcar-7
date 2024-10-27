import {Console} from '@woowacourse/mission-utils'
import Car from "./Car.js";
import { getValidatedCarNames, getValidatedIteration } from "./Input.js";


class App {
  async run() {
    let input = await getValidatedCarNames();
    let cars = [];

    for (let i = 0; i < input.length; i++) {
      cars.push(new Car(input[i]));
    }
    let iteration = await getValidatedIteration();
    Console.print(" ");
    Console.print("실행 결과");

    for (let i = 0; i < iteration; i++) {
      //전진시키기
      for (let j = 0; j < input.length; j++) {
        cars[j].goForward();
      }
      //전진한 만큼 출력
      for (let j = 0; j < input.length; j++) {
        cars[j].printDistance();
      }
      Console.print(" ");
    }
    
    //우승자 가리기
    let maxDistance = 0;
    //제일 많이 간 거리 구하기
    for (let i = 0; i < input.length; i++) {
      let distance = cars[i].getDistance();
      if (distance > maxDistance) {
        maxDistance = distance;
      }
    }
    //우승자 배열에 추가
    let winners = [];
    for (let i = 0; i < input.length; i++) {
      if(cars[i].getDistance() == maxDistance)
        winners.push(cars[i].getName())
    }
    
    Console.print("최종 우승자 : " + winners.join(', '));
  }
}

export default App;
