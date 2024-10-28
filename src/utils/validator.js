export function isNumber(string){
  return !isNaN(string);
}

export function isEmptyString(string){
  return string.trim() === '';
}

export function isNotEmptyString(string){
  return string.length !== 0;
}

export function isShorterThan(maxLength){
  return (str) => str.length <= maxLength;
}

export function isLongerThan(len){
  return (str) => str.length >= len;
}
