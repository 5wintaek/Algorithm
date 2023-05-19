# [level 0] 모음 제거 - 120849 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120849) 

### 성능 요약

메모리: 33.3 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 <code>my_string</code>이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li><code>my_string</code>은 소문자와 공백으로 이루어져 있습니다.</li>
<li>1 ≤ <code>my_string</code>의 길이 ≤ 1,000</li>
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
<td>"bus"</td>
<td>"bs"</td>
</tr>
<tr>
<td>"nice to meet you"</td>
<td>"nc t mt y"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>"bus"에서 모음 u를 제거한 "bs"를 return합니다.</li>
</ul>

<p>입출력 예 #1</p>

<ul>
<li>"nice to meet you"에서 모음 i, o, e, u를 모두 제거한 "nc t mt y"를 return합니다.</li>
</ul>

### 문제 풀이
- (1) 문자열 my_string 을 배열로 만들어줍니다.
- (2) filter 를 사용하여 모음인것들을 제거하고, includes 를 사용하여 나머지를 return 해준다음
- (3) join 을 사용하여 배열->문자열로 바꿔줍니다.
```js
function solution(my_string) {
    return [...my_string]
    .filter((v)=>!['a','e','i','o','u'].includes(v))
    .join('')
}
```


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
