// 성능을 위해 찾는 즉시 리턴
export default function checkDuplicate(arr) {
  const seen = new Set();
  for (const name of arr) {
    if (seen.has(name)) {
      return true;
    }
    seen.add(name);
  }
  return false;
}
