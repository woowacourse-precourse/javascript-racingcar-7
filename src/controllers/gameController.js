import { inputHandler, outputHandler } from "../views/index.js";
import { GAME_MESSAGES, ERROR_MESSAGES } from "../constants/index.js";
import { randomNumber, carNameParser } from "../utils/index.js";
import { RacingGame } from "../models/index.js";

const gameController = {
  startGame: async () => {
    const carNames = await inputHandler.carNameInput();
    const racingTryCount = await inputHandler.racingTryCountInput();

    const game = new RacingGame(carNames, racingTryCount);

    await gameController.playGame(game);
  },

  playGame: (game) => {},
  endGame: () => {},
};
export default gameController;
