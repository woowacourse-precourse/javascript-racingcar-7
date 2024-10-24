export default function checkStringLength(value) {
  return value.some((v) => v.length > 5);
}
