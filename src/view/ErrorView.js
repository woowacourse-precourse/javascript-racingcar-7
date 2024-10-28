export class ErrorView {
  printError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}
