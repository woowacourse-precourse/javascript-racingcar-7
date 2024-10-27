import { Console } from '@woowacourse/mission-utils';
import Validation from './Validation.js';
import Input from './Input.js';
import Race from './Race.js';

class App {
  async run() {
    const inputNames = await Input.getNameInput();
    const names = Input.getNames(inputNames);
    Validation.checkNameInput(names);

    const trial = Number(await Input.getTrial());
    Validation.checkCountInput(trial);

    const cars = Input.getCars(names);

    Console.print('\n실행 결과');

    Race.race(trial, cars);
    Race.whoIsWinner(cars);
  }
}
export default App;
