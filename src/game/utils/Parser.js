export default class Parser {
  static splitByComma(text) {
    return text.split(',').map((element) => element.trim());
  }

  static joinWithComma(items) {
    return items.join(', ');
  }
}
