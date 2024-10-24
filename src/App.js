import { Random } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    function splitUserInput(userInput) {
      return userInput.split(',').map(car => car.trim());
    }

    function validateCar(car, raceCars) {
      if (car.length > 5) {
        throwError(ERROR_MESSAGES.CAR_NAME_TOO_LONG);
      }

      if (car in raceCars) {
        throwError(ERROR_MESSAGES.CAR_ALREADY_EXISTS(car));
      }
    }

    function addCar(car, raceCars) {
      validateCar(car, raceCars)
      raceCars[car] = '';
      return true;
    }

    async function getRaceCar() {
      const userInput = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분, 최대 5글자, 공백 제외)\n'
      );

      const cars = splitUserInput(userInput);
      let raceCars = {};

      cars.forEach(car => addCar(car, raceCars));
      return ['success',raceCars]
    }
    
    const ERROR_MESSAGES = {
      CAR_NAME_TOO_LONG: "자동차 이름은 최대 5글자여야 합니다.", 
      CAR_ALREADY_EXISTS: (car) => `중복된 참가자가 있습니다: "${car}"`,
      INPUT_NOT_A_NUMBER: "입력값은 숫자여야 합니다.",
    };

    function throwError(errorMessage) {
      throw new Error(`[ERROR] ${errorMessage}`);
    }

    const [raceCarStatus,raceCars] = await getRaceCar();

    if(raceCarStatus==='success'){
      getAttemptCount(raceCars)
    }

    function validateNumber(attemptCount){
      if(isNaN(attemptCount)){throwError(ERROR_MESSAGES.INPUT_NOT_A_NUMBER)}
      else if(!isNaN(attemptCount)){return 'number'}
    }
    
    async function getAttemptCount(raceCars) {
      const attemptCount = await Console.readLineAsync(
        '원하는 이동 횟수를 입력하세요.(움직이는 칸 수와 무관)\n'
      );
      const attemptCountNum=Number(attemptCount)
      const numberStatus = validateNumber(attemptCountNum)
      if(numberStatus==='number'){
        Console.print('실행결과\n') 
        moveCar(attemptCountNum,raceCars)}
    }

    function moveCar(attemptCountNum, raceCars) {
      const carKeys = Object.keys(raceCars);
      for (let i = 0; i < attemptCountNum; i++) {
        carKeys.forEach(key => {
          if (Random.pickNumberInRange(0, 9) > 4) raceCars[key] += '-';
        });
        const statusOutput = carKeys.map(key => `${key} : ${raceCars[key]}\n`).join('');
        Console.print(`${statusOutput}`);
      }
      checkWinner(raceCars);
    }
    

    function getDistances(raceCars) {
      return Object.values(raceCars).map(distance => distance.length);
    }
    
    function getMaxDistance(distances) {
      return Math.max(...distances);
    }
    
    function findWinners(raceCars, maxDistance) {
      return Object.entries(raceCars)
        .filter(([car, distance]) => distance.length === maxDistance)
        .map(([car]) => car);
    }
    
    function printWinners(winners) {
      Console.print(`최종 우승자: ${winners.join(', ')}`);
    }
    
    function checkWinner(raceCars) {
      const distances = getDistances(raceCars);
      const maxDistance = getMaxDistance(distances);
      const winners = findWinners(raceCars, maxDistance);
      printWinners(winners);
    }
    
    
  }


}

export default App;
