# javascript-racingcar-precourse

## 👀 자동차 경주 구현 요구사항

1. 개별 자동차를 표현하는 `Car` 클래스 생성 및 검증

   - [ ] `Car` 클래스 생성
   - [ ] 생성자에서 이름 받아 초기화
   - [ ] 이름이 5자 초과일 때 에러 발생
   - [ ] 이름이 공백일 때 에러 발생

2. 전체적으로 게임을 관리하는 `RacingGame` 클래스 생성 및 검증

   - [ ] `RacingGame` 클래스 생성
   - [ ] 쉼표 기준으로 이름 분리
   - [ ] 자동차 이름 중복 시 에러 발생
   - [ ] 시도 횟수 숫자 여부 검증
   - [ ] 시도 횟수 양수인지 검증

3. 자동차 이동 로직 구현

   - [ ] 개별 자동차를 나타내는 `Car` 클래스에 이동 메서드 추가
   - [ ] Random 값에 따른 이동 구현 (이동 조건 판단)
   - [ ] 이동에 따른 위치 값 업데이트
   - [ ] 모든 자동차 이동 처리

4. 자동차 경주 상태 출력

   - [ ] 상태 출력 메서드 추가
   - [ ] 각 회차에 따라 전체 자동차의 상태 출력

5. 우승자 판정

   - [ ] 최대 이동 거리 계산 메서드 추가
   - [ ] 우승자 목록 생성
   - [ ] 우승자 판정 메서드 추가
   - [ ] 단독 우승자 테스트
   - [ ] 공동 우승자 테스트

6. 메인 `App.js` 완성

   - [ ] `App` 클래스 구현
   - [ ] 사용자 입력 처리
   - [ ] 예외 처리

## ⚠️ 프로그래밍 요구 사항

- 들여쓰기 depth는 2까지 허용
- 삼항 연산자 사용 금지
- 함수는 한 가지 일만 수행
- Jest를 이용한 TDD 방식으로 구현
- Random 값은 `MissionUtils.Random.pickNumberInRange()` 사용
- 사용자 입출력은 `MissionUtils.Console()` 사용
