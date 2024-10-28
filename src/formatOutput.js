export function formatOutput(resultArray) {
  let result = "실행 결과\n";
  // Get progress output
  resultArray.forEach((value) => {
    Object.keys(value).forEach((v) => {
      const progress = new Array(value[v]).fill("-").join("");
      result += `${v} : ${progress}\n`;
    });
    result += "\n";
  });
  // Get winnner(s)
  const winner = Object.entries(resultArray.pop())
    .sort((a, b) => b[1] - a[1])
    .reduce((prev, curr) => {
      if (prev.length === 0) {
        prev.push(curr);
      } else if (prev.length > 0 && curr[1] === prev[0][1]) {
        prev.push(curr);
      }
      return prev;
    }, [])
    .map((value) => value[0])
    .join(", ");
  result += `최종 우승자 : ${winner}`;
  return result;
}
