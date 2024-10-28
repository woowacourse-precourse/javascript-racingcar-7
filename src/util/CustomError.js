const ERROR_PREFIX = '[ERROR]';

class CustomError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super([ERROR_PREFIX, message].join(' '));
  }
}

export default CustomError;
