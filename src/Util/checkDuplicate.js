/**
 * 배열에서 중복된 항목이 있는지 확인합니다.
 * 중복이 발견되면 성능을 위해 즉시 `true`를 반환합니다.
 *
 * @function checkDuplicate
 * @param {Array} arr - 중복 여부를 검사할 배열입니다.
 * @returns {boolean} 중복된 항목이 있으면 `true`, 없으면 `false`를 반환합니다.
 *
 *
 * @example
 * checkDuplicate(['apple', 'banana', 'apple']); // true
 * checkDuplicate(['apple', 'banana', 'orange']); // false
 */
export default function checkDuplicate(arr) {
  const seen = new Set();
  return arr.some((name) => {
    if (seen.has(name)) return true;
    seen.add(name);
    return false;
  });
}
