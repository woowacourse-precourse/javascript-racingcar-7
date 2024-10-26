class TryNumberValidation {
  static checkIsEmpty(tryNumber) {
    return !tryNumber;
  }

  static checkIsNaN(tryNumber) {
    return !Number.isInteger(tryNumber);
  }
}
export default TryNumberValidation;
