# 구현 기능 목록

## 1. 입력 대기

- `CarRacingInputReader.js`

  - `getCarNames()`

    - 자동차 입력 대기 문구를 출력.

    ```jsx
    경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
    ```

    - 사용자가 자동차 이름을 입력.

    ```jsx
    pobi, woni, jun;
    ```

  - `getTotalRounds()`
    - 시도 횟수 입력 대기 문구를 출력.
    ```jsx
    시도할 횟수는 몇 회인가요?
    ```
    - 시도 횟수를 입력.
    ```jsx
    5;
    ```

## 2. 자동차 경기 진행

- `Car.js`
  - `constructor()`
    - 자동차 이름과 이동 거리를 저장.
  - `attempMove()`
    - 랜덤 숫자에 따라 전진 유무를 결정.
    - 0, 1, 2, 3 : 이동 없음
    - 4, 5, 6, 7,8, 9 : 1칸 전진
- `CarRacingGame.js`
  - `constructor()`
    - 입력받은 자동차 리스트로 자동차별 `Car` 인스턴스를 담은 인스턴스 배열을 속성으로 생성.
  - `startGame(totalRounds)`
    - 입력받은 라운드 수 만큼 경주를 진행.
  - `playRound()`
    - 각 라운드의 경주를 진행.
  - `determineWinners()`
    - 최종 라운드 종료시 우승자를 판정하여 반환.

## 3. 출력

- `CarRacingOutputWriter.js`

  - `printRoundResults()`
  - 매 라운드 종료 시 진행 상황 출력

    ```jsx
    실행 결과
    pobi : -
    woni :
    jun : -

    pobi : --
    woni : -
    jun : --

    pobi : ---
    woni : --
    jun : ---

    pobi : ----
    woni : ---
    jun : ----

    pobi : -----
    woni : ----
    jun : -----
    ```

  - `printWinners()`
    - 단독 우승 : 우승자를 출력
      ```jsx
      	최종 우승자 : pobi
      ```
    - 공동 우승 : `,` 로 구분하여 공동 우승자를 처음 입력 순서대로 출력.
      ```jsx
      최종 우승자 : pobi, jun
      ```
