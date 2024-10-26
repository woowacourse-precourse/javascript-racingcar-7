export default function checkIsEmptyOrNull(value) {
  return value.some((v) => v.trim() === '' || v == null);
}
