import { createCarList } from '../utils/createCarList.js';
import gameController from './gameController.js';
import { StartMessage } from '../view/ConsoleView.js';
import { userInput } from './userInput.js';

const Main = async () => {
  StartMessage();
  const { carNames, parsedTryNumber } = await userInput();
  const carList = createCarList(carNames);
  gameController(carList, parsedTryNumber);
};

export default Main;
