import { inputHandler, outputHandler } from "../views/index.js";
import { GAME_MESSAGES } from "../constants/index.js";
import { RacingGame } from "../models/index.js";

const gameController = {
  startGame: async () => {
    const carNames = await inputHandler.carNameInput();
    const game = new RacingGame(carNames);

    const racingTryCount = await inputHandler.racingTryCountInput();
    game.setTryCount(racingTryCount);

    await gameController.playGame(game);
  },

  playGame: (game) => {
    outputHandler.printMessage(GAME_MESSAGES.RESULT);

    for (let i = 0; i < game.getTryCount(); i++) {
      game.playRound();
      outputHandler.printRoundResult(game.getCars());
      outputHandler.printMessage("");
    }

    gameController.endGame(game);
  },

  endGame: (game) => {
    const winners = game.getWinners();
    outputHandler.printMessage(`${GAME_MESSAGES.WINNER}${winners.join(", ")}`);
  },
};
export default gameController;
