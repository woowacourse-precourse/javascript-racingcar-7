import Accelerator from './Accelearator.js';
import IOProcessor from './IOProcessor.js';

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
    this.#name = name;
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
