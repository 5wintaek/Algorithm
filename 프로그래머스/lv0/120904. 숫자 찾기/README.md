# [level 0] 숫자 찾기 - 120904 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120904) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>정수 <code>num</code>과 <code>k</code>가 매개변수로 주어질 때, <code>num</code>을 이루는 숫자 중에 <code>k</code>가 있으면 <code>num</code>의  그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>0 &lt; <code>num</code> &lt; 1,000,000</li>
<li>0 ≤ <code>k</code> &lt; 10</li>
<li><code>num</code>에 <code>k</code>가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>num</th>
<th>k</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>29183</td>
<td>1</td>
<td>3</td>
</tr>
<tr>
<td>232443</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>123456</td>
<td>7</td>
<td>-1</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>29183에서 1은 3번째에 있습니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>232443에서 4는 4번째에 처음 등장합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li>123456에 7은 없으므로 -1을 return 합니다.</li>
</ul>

### 다른 사람의 문제 풀이

(1) 숫자열인 num 을 문자열로 반환하기 위해서 toString() 을 사용해준다.

(2) arr.includes(item, from) 를 이용하여 k 가 나오면 if문이 실행되게 적어줍니다.

(3) k가 나오면 true 로 반환이 되니 조건문 안에는 arr.indexOf(item, from) 를 활용하여 해당 요소의 인덱스를 반환해줍니다. k가 나온 숫자를 return 해주어야 하니 +1 을 더해줍니다. (인덱스 요소를 반환하여서 +1 을 하였습니다 )

(4) 문제 요건중에 k가 말하는 숫자가 없다면 -1 을 return 을 해주어야 하니 else 문에 return -1 을 해줍니다.

```js
function solution(num, k) {
    let answer = num.toString()
    if (answer.includes(k)) {
        return answer.indexOf(k) + 1;
    } else {
        return -1;
    }
}
```


### 출처
https://taegon.kim/archives/10387


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
