# [level 0] 자릿수 더하기 - 120906 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120906?language=javascript) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>정수 <code>n</code>이 매개변수로 주어질 때 <code>n</code>의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>0 ≤ <code>n</code> ≤ 1,000,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>1234</td>
<td>10</td>
</tr>
<tr>
<td>930211</td>
<td>16</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>1 + 2 + 3 + 4 = 10을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.</li>
</ul>

### 문제풀이
(1) 숫자열을 문자열로 바꿔주기 위해 toString()을 사용하였습니다

(2) for문을 돌려 num 안에 있는 숫자들을 각각 꺼내준 다음 차례대로 더해주었습니다.

(3) parseInt로 감싸준 이유는 num이 문자열로 인식을 하기 때문에 숫자로 바꿔주기 위해 parseInt를 사용하였습니다.

```js
function solution(n) {
    let answer = 0
    let num = n.toString()
    
    for(let i=0; i<num.length; i++){
        answer += parseInt(num[i])
    }
    return answer;
}
```




> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
