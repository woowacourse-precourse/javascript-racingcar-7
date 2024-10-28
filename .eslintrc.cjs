module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    eqeqeq: ['error', 'always'], // == 대신 === 사용 강제
    'no-console': 'warn', // console.log는 경고로 표시
    'no-var': 'error', // var 사용 금지, let이나 const 사용
    'prefer-const': 'error', // const 사용 강제
    'arrow-parens': ['error', 'as-needed'], // 화살표 함수 매개변수 괄호 생략 허용
    'prefer-template': 'error', // 문자열 연결 대신 템플릿 리터럴 사용
    'object-curly-newline': ['error', { consistent: true }], // 중괄호 안에서 줄바꿈 규칙
    'comma-dangle': ['error', 'always-multiline'], // 여러 줄일 때 마지막에 쉼표 허용
    'no-alert': 'error', // alert, confirm, prompt 사용 금지
    'no-unused-vars': 'warn', // 사용되지 않는 변수 경고
    'consistent-return': 'error', // 일관된 반환 값 강제
    'no-redeclare': 'error', // 동일한 변수 재선언 금지
    'default-case': 'error', // switch문에서 default case 강제
    'no-else-return': 'error', // else 사용 금지, if문 안에 return 있을 경우
    'no-implicit-coercion': ['error', { allow: ['!!'] }], // !! 외의 암시적 형 변환 금지
    'no-magic-numbers': ['warn', { ignore: [0, 1] }], // 0, 1 외의 상수 숫자 경고
    'max-depth': ['error', 2], // 들여쓰기 깊이 2로 제한
    'no-ternary': 'error', // 삼항 연산자 사용 금지
    camelcase: 'off', // camelCase 규칙 비활성화
  },
};
