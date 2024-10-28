export class RaceError extends Error {
  constructor(message) {
    super("[ERROR] " + message);
    this.name = "Race Error";
  }
}
