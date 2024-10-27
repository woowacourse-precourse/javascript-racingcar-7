export const ParseUtils = {
  parseDistanceToDash(distance) {
    let result = "";
    for (let i = 0; i < distance; i++) {
      result += "-";
    }
    return result;
  },
};
