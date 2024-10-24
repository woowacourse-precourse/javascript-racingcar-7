export default class Parser {
  static splitStringByComma(inputString) {
    const stringArray = inputString.split(new RegExp(','));
    return stringArray;
  }

  static joinWithComma(array) {
    return array.map((element) => element).join(', ');
  }
}
