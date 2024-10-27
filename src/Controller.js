export class raceController {
  constructor(inputNames, inputAttemps) {
    this.cars = inputNames.split(',').map((name) => name.trim());
    this.attemps = inputAttemps;
  }
}
