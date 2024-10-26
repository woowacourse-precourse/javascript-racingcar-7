# javascript-racingcar-precourse

## 시나리오

1. 대회에 참가하는 자동차의 이름을 입력한다.
2. 각 자동차가 움직일 횟수를 입력한다.
3. 주어진 횟수 만큼 각 자동차가 움직인다.
   1. 랜덤 값을 뽑는다.
   2. 랜덤 값이 4이상인 경우 이동한다.
4. 모든 횟수만큼 이동했을 때, 가장 멀리 이동한 자동차를 선정한다.
5. 우승 자동차의 이름을 출력한다.

<br />

## 구현 사항

- [ ] 입력
  - [ ] 경주할 자동차 이름 입력 ( 이름은 쉼표 기준으로 구분)
    - 예외 케이스
      - [ ] 길이가 5자 이상인 이름이 있는 경우
      - [ ] 쉼표 기준으로 입력되지 않았을 때
      - [ ] 아무 이름도 들어오지 않았을때
      - [ ] 쉼표만 입력되었을 때
  - [ ] 시도할 횟수 입력
    - 예외 케이스
      - [ ] 숫자 외 다른 값이 입력되는 경우
      - [ ] 음수가 입력되는 경우
- [ ] 출력
  - [ ] 차수별 실행 결과 출력
  - [ ] 단독 우승자 안내 문구
  - [ ] 공동 우승자 안내 문구
- [ ] 기능 동작
  - [ ] 이동
    - [ ] 주어진 횟수 동안 입력받은 자동차들이 각각 이동한다.
    - [ ] 랜덤 값을 뽑고, 랜덤 값이 4 이상인 경우 이동한다.
- [ ] 에러
  - [ ] 잘못된 값을 입력한 경우 `[ERROR]` 로 시작하는 메세와 함께 Error를 발생시키고 애플리케이션을 종료한다.
