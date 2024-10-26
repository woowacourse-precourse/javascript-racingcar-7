/**
 * 문자열에서 자동차 이름을 추출하는 유틸리티 클래스
 * @class
 */
class Extractor {
  /**
   * 입력된 문자열에서 콤마(,)를 기준으로 이름들을 분리하여 배열로 반환
   * 각 이름의 앞뒤 공백은 제거
   * @param {string} namesInput - 콤마로 구분된 이름들이 포함된 문자열
   * @returns {string[]} 추출된 이름들의 배열
   * @example
   * Extractor.extractName("pobi, woni, jun") // returns ["pobi", "woni", "jun"]
   */
  static extractName(namesInput) {
    return namesInput.split(",").map(name => name.trim());
  }

  /**
   * 입력된 문자열에서 고유한 이름들만 추출하여 배열로 반환
   * 중복된 이름은 하나만 유지되며, 각 이름의 앞뒤 공백은 제거
   * @param {string} namesInput - 콤마로 구분된 이름들이 포함된 문자열
   * @returns {string[]} 중복이 제거된 고유한 이름들의 배열
   * @example
   * Extractor.extractDistinctName("pobi, woni, pobi") // returns ["pobi", "woni"]
   */
  static extractDistinctName(namesInput) {
    const extractedName = this.extractName(namesInput)
    return [...new Set([...extractedName])]
  }
}

export default Extractor