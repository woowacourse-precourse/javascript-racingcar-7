export default class Parser {
  static splitStringByComma(inputString) {
    return inputString.split(',').map((element) => element.trim());
  }

  static joinWithComma(array) {
    return array.join(', ');
  }
}
