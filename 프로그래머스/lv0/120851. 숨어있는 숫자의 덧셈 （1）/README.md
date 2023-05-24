# [level 0] 숨어있는 숫자의 덧셈 (1) - 120851 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120851) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.06 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>문자열 <code>my_string</code>이 매개변수로 주어집니다. <code>my_string</code>안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>my_string</code>의 길이&nbsp;≤ 1,000</li>
<li><code>my_string</code>은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>my_string</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"aAb1B2cC34oOp"</td>
<td>10</td>
</tr>
<tr>
<td>"1a2b3c4d123"</td>
<td>16</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>"aAb1B2cC34oOp"안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>"1a2b3c4d123Z"안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.</li>
</ul>

<hr>

<h5>유의사항</h5>

<ul>
<li>연속된 숫자도 각각 한 자리 숫자로 취급합니다.</li>
</ul>


### 문제 풀이 
(1) 처음에 [...my_string] 으로 문제풀이를 시도해보려 했지만 아직 혼자서는 진행이 잘 안되는거 같아 split 으로 진행하였다
(2) split 으로 배열 변환 후, map 을 돌려 isNaN 으로 확인해준다. -> 배열 안에 있는 문자열들을 map 으로 돌리면 NaN 처리가 된다.
(3) ```!isNan```이면 answer 에 더해주고 아니라면 0을 처리해준다. 

```js
function solution(my_string) {
    let answer = 0;
    my_string.split("").map(e => !isNaN(e)? answer += Number(e) : 0)
    return answer;
}
```

### 다른 문제 풀이
spread 문법을 이용하여 문제 풀이를 하고 싶었는데 좋은 문제풀이가 있어서 참고하였다.
```js
function solution(my_string) {
    return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0)
}
```

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
