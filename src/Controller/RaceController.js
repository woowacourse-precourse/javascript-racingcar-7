class RaceController {
  constructor(inputView, raceService, outputView) {
    this.inputView = inputView;
    this.raceService = raceService;
    this.outputView = outputView;
  }

  async run() {
    const inputCarNames = await this.inputView.readCarNames();
    const attemptCount = await this.inputView.readAttemptCount();

    this.raceService.start(inputCarNames, attemptCount);

    const { raceCarNames, raceRecords } = this.raceService.getRaceRecords();
    const winners = this.raceService.getWinners();

    this.outputView.printExecutionResults();
    this.outputView.printAllCarProgress(
      attemptCount,
      raceCarNames,
      raceRecords
    );
    this.outputView.printWinners(winners);
  }
}

export default RaceController;
