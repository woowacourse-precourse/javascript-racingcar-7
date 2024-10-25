# javascript-racingcar-precourse

## 구현할 기능 설계 및 정리

- [ ] **사용자 입력 받기**

  - [ ] **자동차 이름 입력 받기**

    쉼표(,)로 구분된 n대의 자동차의 이름을 입력 받고, 각 자동차의 이름과 자동차가 총 몇 대인지 구한다.

    🚨 에러 발생 case

    - 어떤 자동차라도 이름이 5자를 초과하는 경우

    > 자동차 이름에 특수문자 또는 숫자 또는 공백이 들어가는 경우도 허용하는 것으로 정한다. (이때, 공백이 쉼표 옆에 위치하는 경우는 자동차 이름에 포함시키지 않는다.)

    - 자동차 이름이 똑같은 경우

  - [ ] **경주 횟수 입력 받기**

    자동차들을 몇 번 이동하게 할 것인지 입력 받는다.

    🚨 에러 발생 case

    - 입력값이 양 정수가 아닌 경우 (0의 경우에도 경주를 치루지 않은 것이 되므로 에러 케이스로 정한다) <br/>

- [ ] **각 차시마다 각 자동차의 전진 유무 구하기**

  n차시에 각 자동차들이 전진하는지에 대한 여부를 구한다.

- [ ] **각 차시마다 자동차의 이동 상태 출력**

  n차시에 전진하는 자동차들을 이동시키고, 모든 자동차들의 현재까지 이동한 결과를 출력한다.

- [ ] **게임 종료 후 우승자 구하기**

  입력한 횟수만큼 경주가 진행이 완료되고, 마지막 경주를 기준으로 가장 많이 이동한 자동차를 구한다. 가장 많이 이동한 자동차가 유일하지 않다면 동일 거리를 이동한 자동차 모두를 공동 우승자로 정한다.

- [ ] **최종 우승자 출력하기**

  구한 우승자를 출력한다.
