// src/controllers/Controller.js

import InputHandler from '../handlers/InputHandler.js';
import RaceGame from '../models/RaceGame.js';
import GameService from '../Services/GameService.js';
import { OutputView } from '../views/index.js';

export default class Controller {
  async run() {
    try {
      const cars = await InputHandler.getParticipants();
      const gameAttempts = await InputHandler.getGameAttempts();
      const raceGame = new RaceGame(cars, gameAttempts);

      const gameService = new GameService(raceGame);
      gameService.startRace();
      gameService.showResult();
    } catch (error) {
      OutputView.printError(error.message);
      throw error;
    }
  }
}
