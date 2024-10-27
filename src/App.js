import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import CarManagementService from './Service/CarManagementService.js';
import CarMovementService from './Service/CarMovementService.js';
import DetermineWinnerService from './Service/DetermineWinnerService.js';
import RaceService from './Service/RaceService.js';
import RaceController from './Controller/RaceController.js';

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const carManagementService = new CarManagementService();
    const carMovementService = new CarMovementService();
    const determineWinnerService = new DetermineWinnerService();
    const raceService = new RaceService(
      carManagementService,
      carMovementService,
      determineWinnerService
    );
    const raceController = new RaceController(
      inputView,
      raceService,
      outputView
    );

    raceController.run();
  }
}

export default App;
