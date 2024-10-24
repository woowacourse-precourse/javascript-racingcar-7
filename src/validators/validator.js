export default function checkCommaSaperatedNames(input) {
  const pattern = /^[a-zA-Z0-9가-힇,\s]+$/;

  if (!pattern.test(input)) {
    throw new Error('입력 형식이 올바르지 않습니다. 쉼표(,)로만 구분해주세요.');
  }
}
