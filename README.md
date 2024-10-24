# javascript-racingcar-precourse

# ✅ 체크포인트

- [x] 자동차 이름을 쉼표를 구분자로 입력 후 `cars` 배열에 삽입
- [x] 시도할 횟수 입력
- [x] 0에서 9 사이의 무작위 값 추출
  - [x] 4 이상일 경우 전진
  - [x] 아니면 멈춤
- [x] 입력이 유효한지 검증하는 Validator 구현
- [x] 자동차 경주를 play하는 CarRacingGame 클래스 구현
  - [x] 매 횟수마다 이동 결과 출력
  - [x] 가장 많이 이동한 자동차를 `winners` 배열에 삽입
  - [x] 우승자를 쉼표를 구분자로 출력
- [x] 사용자가 잘못된 값을 입력할 경우 `[ERROR]`로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션 종료
  - [x] 자동차 이름이 영어 대소문자, 한글이 아닌 문자가 포함된 경우 `[ERROR] 자동차 이름은 한글, 영문 대소문자만 가능합니다.`
  - [x] 자동차 이름이 5자 넘으면 `[ERROR] 자동차 이름을 5자 이하로 입력해주세요.`
  - [x] 구분자가 쉼표(,)로 입력되지 않은 경우 `[ERROR] 쉼표(,)로 구분된 이름을 입력해주세요.`
  - [x] 시도 횟수 입력이 잘못된 경우 `[ERROR] 시도 횟수는 1 이상의 정수만 입력 가능합니다.`
  - [x] 예상치 못한 에러가 발생한 경우 `[ERROR] 예상치 못한 에러가 발생하였습니다.`

# 📋 문제 해결과정

## 자동차 경주 Flow Chart

![image](https://github.com/user-attachments/assets/bc5225f5-4839-4ea2-87e3-0ed65590491e)

## 자동차 전진/멈춤 시퀀스 다이어그램

![image](https://github.com/user-attachments/assets/7c436e48-63fb-4814-bf49-b21eefbe322a)

## 자동차 경주 클래스 다이어그램

![image](https://github.com/user-attachments/assets/b327f20d-492a-4ab0-a971-dfac8f8ac09c)

# 🛠️ 테스트 케이스

- 자동차 입력
  - 영문 정상 입력
  - 한글 정상 입력
  - 빈 문자열 에러
  - 이름에 숫자 포함 에러
  - 이름에 특수문자 포함 에러
  - 이름 5글자 초과 에러
  - 쉼표(,) 구분자 에러
- 시도 횟수 입력
  - 숫자 정상 입력
  - 큰 숫자 정상 입력
  - 빈 문자열 에러
  - 0 입력 에러
  - 한글 밑 영문 입력 에러
  - 소수 입력 에러
  - 숫자 + 다른 문자 입력 에러

# 📺 실행 결과

# 📕 TMI

- https://jestjs.io/docs/using-matchers
- https://jestjs.io/docs/asynchronous
- https://www.daleseo.com/jest-each/
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static
