# javascript-racingcar-precourse

## 기능 요구 사항
1.경주할 자동차의 이름을 입력받는다.

1-1.자동차 이름은 쉼표를 기준으로 구분하며 이름은 5자 이하만 가능하다.

2.몇 번의 이동을 할 것인지 입력받는다.

3.주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.

3-1.전진을 하는 조건은 0에서 9 사이에서 무작위 값을 구한 뒤 무작위 값이 4 이상일 경우이다.

3-2.무작위 값이 4 미만일 경우 전진하지 않고 멈춘다.

4.경주가 완료되면 가장 많이 전진한 자동차가 우승한 것으로 간주하고 그 자동차의 이름을 표시한다.

4-1.같은 거리를 이동한 자동차가 2대 이상인 경우 우승자의 이름을 쉼표로 구분하여 출력한다.

5.사용자가 잘못된 값을 입력한 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션을 종료한다.

5-1.잘못된 값을 입력하는 경우로는 6자 이상의 자동차 이름을 입력한 경우가 있다.