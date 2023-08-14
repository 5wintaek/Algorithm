# [level 0] 인덱스 바꾸기 - 120895 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120895) 

### 성능 요약

메모리: 33.6 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>문자열 <code>my_string</code>과 정수 <code>num1</code>, <code>num2</code>가 매개변수로 주어질 때, <code>my_string</code>에서 인덱스 <code>num1</code>과 인덱스 <code>num2</code>에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 &lt; <code>my_string</code>의 길이 &lt; 100</li>
<li>0 ≤ <code>num1</code>, <code>num2</code> &lt; <code>my_string</code>의 길이</li>
<li><code>my_string</code>은 소문자로 이루어져 있습니다.</li>
<li><code>num1</code> ≠ <code>num2</code></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>my_string</th>
<th>num1</th>
<th>num2</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"hello"</td>
<td>1</td>
<td>2</td>
<td>"hlelo"</td>
</tr>
<tr>
<td>"I love you"</td>
<td>3</td>
<td>6</td>
<td>"I l veoyou"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>"hello"의 1번째 인덱스인 "e"와 2번째 인덱스인 "l"을 바꾸면 "hlelo"입니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>"I love you"의 3번째 인덱스 "o"와 " "(공백)을 바꾸면 "I l veoyou"입니다.</li>
</ul>

### 문제 풀이

문제풀이에 앞서 저는 for문을 통해서 하나하나 비교해서 자리를 바꿔주려 했지만 그 방법은 틀린 방법임을 알았습니다.

(1) spread 문법을 통해서 문자열->배열로 변환하였습니다

<img width="420" alt="image" src="https://github.com/5wintaek/Algorithm/assets/109938280/94a59ebb-d451-49d1-836b-e0ca3c7af62e">

(2) 구조 분해 할당을 이용하여 , 인덱스에 접근하여 num 1과 num2에 위치를 바꿔주었습니다.

<img width="495" alt="image" src="https://github.com/5wintaek/Algorithm/assets/109938280/a852fbe7-f559-4435-8091-4495369297b5">

(3) 나온 배열의 값들을 다시 문자열로 바꿔주기 위해서 join 을 사용하였습니다. 


```js
function solution(my_string, num1, num2) {
      const copy = [...my_string];
      [copy[num1],copy[num2]] = [copy[num2],copy[num1]];
      return copy.join('');
    }
```


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
