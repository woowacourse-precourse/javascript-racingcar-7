import {  Console, MissionUtils   } from "@woowacourse/mission-utils";
import Car from "./Car.js";


class App {
  async run() {

    // * 랜덤 값 얻기
    const getRandomValue = () => {
      return MissionUtils.Random.pickNumberInRange(0,9);
    }

    // * 무작위 값이 4 이상인 경우, true
    const isValueMoreThanFour = (value) => {
      if (value >= 4){
        return true;
      }
      return false;
    }

    // * 자동차 한칸 전진 
    const increaseCarDistance = (car) => {
      car.distance += 1;
    }

    // * 자동차의 거리만큼 '-' 출력 //pobi : --
    const printCurrentCarDistanceResult = (car) => {
      Console.print(`${car.name} : ${"-".repeat(car.distance)}`); 
    }

    // ! 결과 함수 ===//
    // * 자동차 중 최대 거리 찾기.
    const getMaxDistance = (carArray) => {
      // 자동차 거리 리스트로 뽑기
      let carDistanceArray =[];
      carArray.map((car) => {
        carDistanceArray.push(car.distance); // 자동차의 거리를 배열에 추가.
      })
      
      // 최대 거리 찾기
      const maxDistance = Math.max(...carDistanceArray); // 자동차 거리중, 최대 거리 찾기
      return maxDistance; // 자동차 거리가 담긴 배열 저장
    
    }

    // * 최종 우승 자동차 배열 / 이름 배열 구하기 
    const getWinnerCarNameArrayWithMaxValue = (carArray, maxDistance) => {
      const winnerCars= carArray.filter((car) => 
        car.distance === maxDistance
      ); //distance가 max인것만 뻡는다.

      // winnerCars의 names만 뽑는다.
      const winnerCarNameArray = winnerCars.map((car) => car.name);

      return winnerCarNameArray;
    }

    // * 최종 우승자 출력하기 
    const printWinnerCars = (winnerCarNameArray) => {
      // name 배열을 '/'로 join한다. 
      const CarNames = winnerCarNameArray.join(', '); 

      Console.print(`최종 우승자 : ${CarNames}`);
      
    }

    // ! 예외 처리
    const throughErrorMessage = (message) =>{
      throw new Error(`[ERROR] ${message}`);
    }

    // * == 자동차 입력 이름 처리 == // 

    // * 이름이 5개 이상인가?
    const isCarNamesCharMoreThanFive = (carArray) =>{ 
      let result = carArray.some((car)=> (car.name).length >5 ); // 하나라도 5개 이상이면 true 반환.
      return result;
    }

    // * 이름에 쉼표(,)외의 다른 기호가 들어오는가?
    const isCarsInputSymbolOtherThanComma = (carsInput) => { // str = cars
      const pattern = /[^,가-힣\w\s]/g; // ,제외한 특수기호 모두 찾기.
      const result = pattern.test(carsInput); // 나머지 특수기호가 있는 경우 true , 없으면 false
      
      return result;
    }

    //* 아무것도 입력을 받지 않은 경우, Falsy인 경우
    const isInputFalsy = (carsInput) => {
      if (!carsInput) { //Falsy한 값인 경우, 
        return true;
      }

      if (typeof carsInput === 'string' && carsInput.trim() === ''){ // 공백만 들어온 경우
        return true;
      }

      return false;
    }

    // * 자동차 Input Error 체크
    const checkCarInputError = (carsInput,carArray) => {

      if (isInputFalsy(carsInput)){
        throughErrorMessage("경주할 자동차 이름을 입력하세요");
      }

      if (isCarsInputSymbolOtherThanComma(carsInput)){
        throughErrorMessage("이름은 쉼표(,)로 구분 가능합니다.");
      }

      if (isCarNamesCharMoreThanFive(carArray)){
        throughErrorMessage("자동차 이름은 5글자 이하로 입력해주세요.");
      }

    }
    
    

    try{
      // ! 입력  ============///
      
      const carsInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n') || ""; // pobi,woni,jun
      // *자동차는 (,) 쉼표를 기준으로 배열로 만들어준다.
      const carInputNameArray = carsInput.split(',');// [pobi,woni,jun]


      // * 자동차 객체 배열을 만든다. 
      const carArray = carInputNameArray.map( 
        (nameElement, index) => (new Car({name:nameElement}))
      );

      checkCarInputError(carsInput, carArray);

      const n = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'); // 경주할 자동차의 이름을 입력받는다.
      
      // ! ============///


      // ! 자동차 경주하기 ==== //
      // todo : depth 가 2가 되도록 리팩토링 해야한다.
      // * n번 경주한다.
      Console.print('\n실행 결과');
      for (let i =0; i < n ; i++){
        carArray.forEach((car) => {
          const randomValue = getRandomValue(); 

          if (isValueMoreThanFour(randomValue)) {
            increaseCarDistance(car);
          }
        });

        // * 경주가 끝나면 자동차를 순회하며 각 자동차 거리 출력    
        carArray.forEach((car) => {
          printCurrentCarDistanceResult(car);
        });  

        Console.print("");

      }

      // ! =================== //

      // ! 경주 결과 ========= //
      const maxDistance = getMaxDistance(carArray); // 최대 거리 찾기
      const winnerCarNameArray = getWinnerCarNameArrayWithMaxValue(carArray, maxDistance); // 이긴 자동차 이름 배열 구하기
      printWinnerCars(winnerCarNameArray); // 결과 출력.
      // ! =================== //

    } catch(error) {
      return Promise.reject(error); // 예외 던지기
    }
  }
}

export default App;
