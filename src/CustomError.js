class CustomError extends Error {
  constructor(message) {
    super();
    this.message = `[ERROR] ${message}`;
  }
}

export class NameError extends CustomError {
  constructor(message) {
    super(message);
  }
}

export class RoundError extends CustomError {
  constructor(message) {
    super(message);
  }
}

