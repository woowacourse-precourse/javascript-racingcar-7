import { Console, Random } from "@woowacourse/mission-utils";


const RACING_VARIABLES = {
  INPUT_PROMPT : "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
}
Object.freeze(RACING_VARIABLES);

class UserInput{

  async getUserInputCars(){

    try {
        const userInput = await Console.readLineAsync(RACING_VARIABLES.INPUT_PROMPT);
        return userInput;
    } catch (error) {
        Console.print('[ERROR]: 입력을 받는 중 문제가 발생했습니다.');
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
}


class App {
  constructor (){
    this.userInput = new UserInput();
    this.validator = new Validator();
  }
  async run() {
    const userInput = await this.userInput.getUserInputCars();
    const userInputArray = userInput.split(",");

    this.validator.validateNameLength(userInputArray);


  }
}

export default App;
