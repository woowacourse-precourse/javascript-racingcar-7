const sortArr = (arr) => {
  const ascendArr = arr.sort(
    (a, b) => calculateCharAscii(a) - calculateCharAscii(b),
  );
  return ascendArr;
};

const calculateCharAscii = (str) => {
  let strLength = str.length;
  let strAsciiSum = 0;
  for (let idx = 0; idx < strLength; idx += 1) {
    strAsciiSum += str.charCodeAt(idx);
  }
  return strAsciiSum;
};

export default sortArr;
