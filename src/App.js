import {  Console, MissionUtils   } from "@woowacourse/mission-utils";
import Car from "./Car.js";


class App {
  async run() {

    // ! 자동차 경주 관련 함수 === //
    const getRandomValue = () => {
      return MissionUtils.Random.pickNumberInRange(0,9);
    }

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

    const oneRaceStart = (carArray) => {
      carArray.forEach((car) => {
        const randomValue = getRandomValue(); 
      
        if (isValueMoreThanFour(randomValue)) {
          increaseCarDistance(car);
        }
      })
    }

    const printCurrentCarDistanceResult = (car) => {
      Console.print(`${car.name} : ${"-".repeat(car.distance)}`); 
    }



    // ! 결과 함수 ===//
    // * 자동차 중 최대 거리 찾기.
    const getMaxDistance = (carArray) => {
      let carDistanceArray =[];
      carArray.map((car) => {
        carDistanceArray.push(car.distance); // 자동차의 거리를 배열에 추가.
      })
      
      const maxDistance = Math.max(...carDistanceArray); // 자동차 거리중, 최대 거리 찾기
      return maxDistance; // 자동차 거리가 담긴 배열 저장
    
    }

    // * 최종 우승 자동차 배열 / 이름 배열 구하기 
    const getWinnerCarNameArrayWithMaxValue = (carArray, maxDistance) => {
      const winnerCars= carArray.filter((car) => 
        car.distance === maxDistance
      ); 

      const winnerCarNameArray = winnerCars.map((car) => car.name);

      return winnerCarNameArray;
    }

    // * 최종 우승자 출력하기 
    const printWinnerCars = (winnerCarNameArray) => {
      const CarNames = winnerCarNameArray.join(', '); 

      Console.print(`최종 우승자 : ${CarNames}`);
      
    }

    // ! 예외 처리
    const throughErrorMessage = (message) =>{
      throw new Error(`[ERROR] ${message}`);
    }

    // * == 자동차 입력 이름 처리 == // 

    const isCarNamesCharMoreThanFive = (carArray) =>{ 
      let result = carArray.some((car)=> (car.name).length >5 ); 
      return result;
    }

    const isCarsInputSymbolOtherThanComma = (carsInput) => { 
      const pattern = /[^,ㄱ-ㅎㅏ-ㅣ가-힣\w\s]/g; // ,제외한 특수기호 모두 검색
      const result = pattern.test(carsInput);
      
      return result;
    }

    const isInputFalsy = (carsInput) => {
      if (!carsInput) { 
        return true;
      }

      if (typeof carsInput === 'string' && carsInput.trim() === ''){ // 공백만 들어온 경우
        return true;
      }

      return false;
    }


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
    // * ========================== // 


    // * == 시도할 횟수(차수) 입력 처리 == // 
    const isDegreeZero = (degreeInput) => {
      if (degreeInput == 0) {
        return true;
      }
      return false;
    }


    const checkDegreeInputError = (degreeInput) => {
      if (isInputFalsy(degreeInput)) {
        throughErrorMessage("시도할 횟수를 입력해주세요.");
      }

      if (isDegreeZero(degreeInput)) {
        throughErrorMessage("시도할 횟수가 0보다 커야 경기가 시작됩니다.");
      }
    }
    // * ========================== // 

    try{
      // ! 입력  ============///
      const carsInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n') || "";
      const carInputNameArray = carsInput.split(',');

      const carArray = carInputNameArray.map( 
        (nameElement, index) => (new Car({name:nameElement}))
      );

      checkCarInputError(carsInput, carArray);

      const degreeInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'); 
      
      checkDegreeInputError(degreeInput);
      // ! ============///


      // ! 자동차 경주하기 ==== //
      Console.print('\n실행 결과');

      for (let i = 0; i < degreeInput ; i++){
        oneRaceStart(carArray);

        // * 경주가 끝나면 자동차를 순회하며 각 자동차 거리 출력    
        carArray.forEach((car) => {
          printCurrentCarDistanceResult(car);
        });  

        Console.print("");

      }

      // ! =================== //

      // ! 경주 결과 ========= //
      const maxDistance = getMaxDistance(carArray);
      const winnerCarNameArray = getWinnerCarNameArrayWithMaxValue(carArray, maxDistance);
      printWinnerCars(winnerCarNameArray);
      // ! =================== //

    } catch(error) {
      return Promise.reject(error);
    }
  }
}

export default App;
