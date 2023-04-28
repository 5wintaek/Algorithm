# [level 0] 아이스 아메리카노 - 120819 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120819) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 <code>money</code>가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return&nbsp;하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>0 &lt; <code>money</code> ≤ 1,000,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>money</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>5,500</td>
<td>[1, 0]</td>
</tr>
<tr>
<td>15,000</td>
<td>[2, 4000]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>5,500원은 아이스 아메리카노 한 잔을 살 수 있고 잔돈은 0원입니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>15,000원은 아이스 아메리카노 두 잔을 살 수 있고 잔돈은 4,000원입니다.</li>
</ul>

### 문제풀이
- (1) 정수를 구해야 하기 때문에 Math.floor를 이용하여 구매할 수 있는 아이스 아메리카노에 갯수를 구하였습니다.
- (2) 배열을 구해야 하기 때문에 return 구문 옆에 ```[ ]``` 사용함으로써 값이 바로 구해지게끔 하였습니다.
```js
function solution(money) {
    return [Math.floor(money / 5500), money % 5500]
} 
```

### 다른 문제풀이
하나하나 나열해서 쓰고싶었던 문제풀이가 눈에 보이고 정리가 더 잘되어 가져와보았다.
               
```js
function solution(moneny){
    let a = parseInt(moneny / 5500);
    let b = moneny % 5500;
    return [a, b]
}
```

> 출처 : MDN , https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
