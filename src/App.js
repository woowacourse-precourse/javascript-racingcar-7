import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import RaceCarManagementService from './Service/RaceCarManagementService.js';
import RaceCarMovementService from './Service/RaceCarMovementService.js';
import DetermineWinnerService from './Service/DetermineWinnerService.js';
import RaceService from './Service/RaceService.js';
import RaceController from './Controller/RaceController.js';

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const raceCarManagementService = new RaceCarManagementService();
    const raceCarMovementService = new RaceCarMovementService();
    const determineWinnerService = new DetermineWinnerService();
    const raceService = new RaceService(
      raceCarManagementService,
      raceCarMovementService,
      determineWinnerService
    );
    const raceController = new RaceController(
      inputView,
      raceService,
      outputView
    );

    await raceController.run();
  }
}

export default App;
