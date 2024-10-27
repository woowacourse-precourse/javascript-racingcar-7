# javascript-racingcar-precourse

## 프로젝트 설명
- 자동차를 주어진 이동 횟수 동안 랜덤으로 전진과 멈춤을 반복하는 간단한 자동차 경주 게임입니다. 

## 진행 예시
자동차명 입력
```
경주할 자동차들의 이름을 입력해주세요.(쉼표로 구분)

ferra, rdbll, merc, mclrn
```

이동 횟수 입력
```
경주를 시도할 횟수는 몇 회인가요?(숫자만 입력)

3
```
경주 진행
```
...

[3 랩]
ferra: -
rdbll: -
merc : --
mclrn: --
현재 1등 : merc, mclrn

...
```
우승자 출력
```
최종 우승자 : merc, mclrn
```


## 기능 목록
> 입력
  - 자동차 이름과 이동 횟수를 입력받는다
> 자동차 전진/멈춤 조건
  - 이동 마다 각 자동차의 0~9까지 무작위 값 생성한다
  - 전진 : 4 이상인 경우 (4, 5, 6, 7, 8, 9) 
  - 멈춤 : 4 미만인 경우 (0, 1, 2, 3)
> 경주 진행
  - 이동 횟수만큼 경주를 진행한다
  - 이동 마다 결과를 출력한다
> 우승자 결정
  - 가장 많이 전진한 차를 우승자로 결정한다
  - 우승자가 여러명일 경우 쉼표로 구분하여 출력한다
> 오류 처리
  - 입력된 값이 형식에 맞지 않거나 잘못된 경우 오류 메세지를 출력하고 종료된다
    - 자동차명이 5자 초과일 경우 에러 출력
    - 자동차명이 공백일 경우 에러 출력
    - 자동차명이 중복될 경우 에러 출력
    - 이동 횟수가 자연수가 아닐 경우 에러 출력
