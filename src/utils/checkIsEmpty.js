export default function checkIsEmpty(value) {
  return value.some((v) => v.includes(' '));
}
