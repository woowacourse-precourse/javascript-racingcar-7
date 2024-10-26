import { inputHandler, outputHandler } from "../views/index.js";
import { GAME_MESSAGES, ERROR_MESSAGES } from "../constants/index.js";

const gameController = {
  startGame: async () => {
    const carNames = await inputHandler.carNameInput();
  },
};
export default gameController;
