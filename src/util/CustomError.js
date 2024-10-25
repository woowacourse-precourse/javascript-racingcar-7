class CustomError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(['[ERROR]', message].join(' '));
  }
}

export default CustomError;
