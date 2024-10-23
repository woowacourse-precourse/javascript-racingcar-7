export function validateInput(input) {
  if (input.trim() === '') {
    throw new Error('[ERROR] 값을 입력해야합니다');
  }
  return;
}