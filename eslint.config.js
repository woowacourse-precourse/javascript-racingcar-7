export default [
  {
    rules: {
      // 들여쓰기 깊이를 2로 제한
      'max-depth': ['error', 2],

      // 들여쓰기를 2칸으로 설정 (기본 자바스크립트 컨벤션)
      'indent': ['error', 2],

      // 세미콜론을 항상 사용
      'semi': ['error', 'always'],

      // 사용되지 않는 변수를 오류로 처리
      'no-unused-vars': 'error',

      // 가능한 경우 const를 사용하도록 권장
      'prefer-const': ['error', {
        'destructuring': 'all',
        'ignoreReadBeforeAssign': true
      }],

      // 중괄호 사용을 강제
      'curly': 'error',

      // ===와 !== 사용을 강제
      'eqeqeq': ['error', 'always'],

      // 콘솔 사용을 경고로 처리 (필요에 따라 비활성화 가능)
      'no-console': 'warn'
    }
  }
];
