import Accelerator from './Accelearator.js';
import IOProcessor from './IOProcessor.js';
import { MAX_NAME_LENGTH, ERROR_MESSAGE } from './constants.js';

/**
 *
 */
class Car {
  #name;
  #position;
  #accelerator;

  /**
   *
   */
  constructor(name) {
    this.setName(name);
    this.#position = 0;
    this.#accelerator = new Accelerator();
    this.ioProcessor = new IOProcessor();
  }

  /**
   *
   */
  setName(name) {
    if (!name) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME_NULL);
    }

    if (name.length > MAX_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
    }

    this.#name = name;
  }

  /**
   *
   */
  getName() {
    return this.#name;
  }

  /**
   *
   */
  getPosition() {
    return this.#position;
  }

  /**
   * accelerator의 기준에 따라 자동차를 전진
   */
  accelerate() {
    if (this.#accelerator.isAccelerate()) {
      this.#position += 1;
    }
  }

  /**
   *
   */
  printStatus() {
    this.ioProcessor.processOutput(
      `${this.#name} : ${'-'.repeat(this.#position)}`
    );
  }
}

export default Car;
