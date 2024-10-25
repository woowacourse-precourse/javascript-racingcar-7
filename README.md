# 자동차 경주

## 기능 목록

프로그램의 주요 기능 목록입니다. 앞에 번호가 붙은 제목이 프로그램의 주요 흐름을 나타냅니다. 구현 완료 시 체크박스(✅)를 사용하여 구현이 완료된 기능임을 명시했습니다.

### 1. 사용자 입력 처리

-   [ ] 콘솔에서 사용자 입력을 받는 기능 (자동차 이름, 시도할 횟수)
-   [ ] 예외 - 이름이 5자 이하가 아니라면 에러 발생
-   [ ] 예외 - 사용자 횟수가 숫자가 아니라면 에러 발생

```
🖨️ - 경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
🧑🏻‍💻 - pobi,woni,jun

🖨️ - 시도할 횟수는 몇 회인가요?
🧑🏻‍💻 - 5
```

### 2. 자동차 이름 추출

-   [ ] 쉼표를 기준으로 자동차 이름 구분

### 3. 시도하는 횟수 만큼 전진 또는 멈추기 수행

-   [ ] 0~9사이의 무작위 값을 구하여 무작위 값이 4 이상일 경우 전진
-   [ ] 각 횟수마다 실행 결과를 출력

```
🖨️  pobi : ---
    woni : --
    jun : ---
```

### 4. 시도가 종료되면 최종 결과 출력

-   [ ] 누가 우승했는지를 출력 (우승자가 여러명일 경우 쉼표를 이용하여 구분)

```
🖨️  최종 우승자 : pobi
```

### 5. 예외 처리

-   [ ] 잘못된 입력에 대한 에러 메세지 생성 - `Error` 객체를 생성하고 `throw`
