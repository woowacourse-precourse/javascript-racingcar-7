# javascript-racingcar-precourse

## 📝 기능 구현 목록
### 1. 입력 처리
#### 자동차 이름 입력
- [x] 쉼표 `,` 로 구분된 문자열 입력 받기
- [x] 입력값 파싱하여 배열로 변환
- [x] 유효성 검사

#### 시도 횟수 입력
- [x] 숫자 형식으로 입력 받기
- [x] 유효성 검사

### 2. 게임 로직
#### 자동차 객체 구현
- [x] 자동차 클래스 생성
  - [x] 이름 속성
  - [x] 위치 속성
  - [x] 이동 메서드
  - [x] 현재 상태 출력 메서드

#### 게임 진행 로직
- [x] 랜덤 숫자 생성 (0-9)
- [x] 전진 조건 확인 (숫자 >= 4)
- [x] 각 차수별 실행
- [x] 모든 자동차에 대해 이동 처리
- [x] 현재 상태 출력

### 3. 결과 출력
#### 경주 진행 상태 출력
- [x] 각 차수마다 모든 자동차의 상태 출력
  - [x] 자동차 이름 출력
  - [x] 현재 위치를 `-` 문자로 표현

#### 우승자 판별 및 출력
- [x] 가장 많이 전진한 자동차 찾기
- [x] 공동 우승자 처리
- [x] 우승자 이름을 쉼표 `,` 로 구분하여 출력

### 4. 예외 처리
#### 에러 메시지 출력
- [x] 모든 예외상황에 `[ERROR]` 프리픽스 추가

#### 예외 상황 처리
- [x] 입력값 누락
- [x] 잘못된 형식의 입력

### 5. 테스트 구현
- [x] 자동차 클래스 테스트
  - [x] 생성자 테스트
  - [x] 이동 메서드 테스트
  - [x] 상태 출력 테스트

- [x] 게임 클래스 테스트
  - [x] 게임 생성 테스트
  - [x] 게임 진행 테스트
  - [x] 우승자 판별 테스트

- [x] 입력 처리 테스트
  - [x] 이름 유효성 검사
  - [x] 시도 횟수 유효성 검사

## 🛠️ 프로그래밍 요구사항

### 개발 환경
- Node.js 20.17.0

### 코드 규칙
1. 코드 구조
   - 시작점: App.js의 `run()`
   - package.json 파일 변경 금지
   - 외부 라이브러리 사용 금지 (제공된 라이브러리 제외)
   - 프로그램 종료 시 `process.exit()` 호출 금지

2. 코드 스타일
   - [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript) 준수
   - indent depth는 최대 2까지만 허용
   - 3항 연산자 사용 금지
   - 함수는 한 가지 기능만 수행

3. 테스트
   - Jest를 사용한 테스트 구현

### 사용 가능한 라이브러리
[`@woowacourse/mission-utils`](https://github.com/woowacourse-projects/javascript-mission-utils)
```javascript
// Random 숫자 생성 (0-9)
MissionUtils.Random.pickNumberInRange(0, 9);

// 입출력
Console.readLineAsync()
Console.print()
```

### 예외 처리
- 모든 잘못된 입력에 대해 "[ERROR]"로 시작하는 메시지를 출력
- `Error`를 발생시키고 애플리케이션 종료
- `process.exit()` 호출 금지

### 제약 사항
- 자동차 이름 5자 이하
- 입력값은 쉼표 `,` 로 구분