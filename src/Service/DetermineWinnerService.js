import IDetermineWinnerService from './Interfaces/IDetermineWinnerService.js';

class DetermineWinnerService extends IDetermineWinnerService {
  determineWinners(raceCars) {
    const maxDistance = Math.max(
      ...raceCars.map(raceCar => raceCar.getForwardCount())
    );

    const winners = raceCars
      .filter(raceCar => raceCar.getForwardCount() === maxDistance)
      .map(raceCar => raceCar.getName());

    return winners;
  }
}

export default DetermineWinnerService;
