class IDetermineWinnerService {
  determineWinners(cars) {
    throw new Error('determineWinners' + ERROR_MESSAGES.MUST_OVERRIDE_METHOD);
  }
}

export default IDetermineWinnerService;
