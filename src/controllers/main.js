import { createCarList } from "../utils/createCarList.js";
import gameController from "./gameController.js";
import { StartMessage } from "../view/ConsoleView.js";
import { userInput } from "./userInput.js";

const Main = async () => {
  try {
    StartMessage();
    const { carNames, parsedTryNumber } = await userInput();
    const carList = createCarList(carNames);
    gameController(carList, parsedTryNumber);
  } catch (error) {
    throw error;
  }
};

export default Main;
