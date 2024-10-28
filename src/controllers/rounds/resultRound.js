import { Console } from '@woowacourse/mission-utils';
import { RoundResultMessage } from '../../view/ConsoleView.js';
import { generateAdvanceSymbol } from '../../utils/generateAdvanceSymbol.js';

const resultRound = (carList) => {
  carList.cars.forEach((car) => {
    const resultAdvanceSymbol = generateAdvanceSymbol(car.advance);
    RoundResultMessage(car.name, resultAdvanceSymbol);
  });
  Console.print('');
};

export default resultRound;
