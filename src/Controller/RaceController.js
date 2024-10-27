class RaceController {
  constructor(inputView, raceService, outputView) {
    this.inputView = inputView;
    this.raceService = raceService;
    this.outputView = outputView;
  }

  async run() {
    const inputRaceCarNames = await this.inputView.readRaceCarNames();
    const attemptCount = await this.inputView.readAttemptCount();

    this.raceService.start(inputRaceCarNames, attemptCount);

    const { raceRaceCarNames, raceRecords } = this.raceService.getRaceRecords();
    const winners = this.raceService.getWinners();

    this.outputView.printExecutionResults();
    this.outputView.printAllRaceCarProgress(
      attemptCount,
      raceRaceCarNames,
      raceRecords
    );
    this.outputView.printWinners(winners);
  }
}

export default RaceController;
