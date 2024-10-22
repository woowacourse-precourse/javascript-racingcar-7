import { Console, Random } from "@woowacourse/mission-utils";


const RACING_VARIABLES = {
  INPUT_PROMPT : "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  INPUT_COUNT_PROMPT : "시도할 횟수는 몇 회인가요?\n",
  POSITION_MARKER : "-",
  MAXIMUM_ROUND : 10,
  WINNER_PROMPT : "최종 우승자"

}
Object.freeze(RACING_VARIABLES);

class UserInput{

  async getUserInputCars(){

    try {
        const userInput = await Console.readLineAsync(RACING_VARIABLES.INPUT_PROMPT);
        return userInput;
    } catch (error) {
        Console.print('[ERROR]: 경주할 자동차를 입력을 받는 중 문제가 발생했습니다.');
        return null;
    }
  }

  async getUserInputCount(){
    try {
      const userInput = await Console.readLineAsync(RACING_VARIABLES.INPUT_COUNT_PROMPT);
      return Number(userInput);
    } catch (error) {
      Console.print('[ERROR]: 횟수를 입력을 받는 중 문제가 발생했습니다.');
      return null;
    }
  }
}

class Validator {

  validateNameLength(names) {
    names.forEach(name => {
      if (name.length > 5) {
        throw new Error(`[ERROR]: 이름 "${name}"이 5자를 초과했습니다.`);
      }
    });
  }

  validateRound(count){
    if (count > RACING_VARIABLES.MAXIMUM_ROUND){
      throw new Error(`[ERROR]: 최대 라운드 횟수 "${RACING_VARIABLES.MAXIMUM_ROUND}"회를 초과했습니다.`);
    }
  }
}

class RaceController{

  createPlayersPositions(playerNumber){
    const positions = Array(playerNumber).fill(0);
    return positions;
  }
  movePlayersRandomly(peopleList){

    const updatedList = [...peopleList];

    for (let i = 0; i< peopleList.length; i++){
      const num = Random.pickNumberInRange(0,9);
      if (num >= 4){
        updatedList[i] += 1;
      }
    }
    return updatedList;
  }

  getRaceWinners (players, positions){
    let maxValue = Math.max(...positions);
    let winnersIndex = [];

    positions.forEach((value,index)=>{
      if(value === maxValue){
        winnersIndex.push(index);
      }
    })

    return winnersIndex;

  }
}

class DisplayController{

  async displayPlayerPositions (players, positions){
    for (let i = 0; i<players.length;i++){
      Console.print(`${players[i]} : ${ RACING_VARIABLES.POSITION_MARKER.repeat(positions[i])}`);
    }
    Console.print("");
  }

  async displayWinners (players, winners){
    const winnerArray = winners.map(idx => players[idx])

    Console.print(`${RACING_VARIABLES.WINNER_PROMPT} : ${winnerArray.join(',')}`)
  }
}


class App {
  constructor (){
    this.userInput = new UserInput();
    this.validator = new Validator();
    this.raceController = new RaceController();
    this.displayController = new DisplayController();
  }
  async run() {
    const userInput = await this.userInput.getUserInputCars();
    const userInputArray = userInput.split(",");

    this.validator.validateNameLength(userInputArray);

    let positions = this.raceController.createPlayersPositions(userInputArray.length);

    const userInputCount = await this.userInput.getUserInputCount();

    this.validator.validateRound(userInputCount);

    
    // Game start
    Console.print("\n실행 결과");
    for (let i = 0; i < userInputCount; i++){
      
      let nextPostions = this.raceController.movePlayersRandomly(positions);

      positions = nextPostions;
      this.displayController.displayPlayerPositions(userInputArray , positions);
    }

    let winnerArray = this.raceController.getRaceWinners(userInputArray, positions);

    this.displayController.displayWinners(userInputArray, winnerArray);

  }
}

export default App;
