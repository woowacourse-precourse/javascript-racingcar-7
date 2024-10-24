import { MAX_NAME_LENGTH, MOVE_MARKER, FORWARD_THRESHOLD, ERROR_MESSAGES } from "../utils/constants.js";

export default class Car {
  constructor(name) {
    this.validateName(name);
    this.name = name;
    this.position = 0;
  }

  validateName(name) {
    if (!name || name.length > MAX_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGES.INVALID_NAME_LENGTH);
    }
  }

  move(number) {
    if (number >= FORWARD_THRESHOLD) {
      this.position += 1;
    }
  }

  getCurrentPosition() {
    return MOVE_MARKER.repeat(this.position);
  }
}