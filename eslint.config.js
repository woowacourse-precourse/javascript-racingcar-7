import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      "no-unused-vars": "warn", // 사용되지 않는 변수에 대해 경고
      "no-console": "off", // 콘솔 로그 허용
      semi: ["error", "always"], // 세미콜론 필수
      quotes: ["error", "double"], // 큰따옴표 사용
    },
  },
  pluginJs.configs.recommended, // 기본 ESLint 추천 설정 추가
];
