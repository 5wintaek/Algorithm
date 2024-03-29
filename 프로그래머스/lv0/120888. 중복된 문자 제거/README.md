# [level 0] 중복된 문자 제거 - 120888 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120888) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>문자열 <code>my_string</code>이 매개변수로 주어집니다. <code>my_string</code>에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>my_string</code> ≤ 110</li>
<li><code>my_string</code>은 대문자, 소문자, 공백으로 구성되어 있습니다.</li>
<li>대문자와 소문자를 구분합니다.</li>
<li>공백(" ")도 하나의 문자로 구분합니다.</li>
<li>중복된 문자 중 가장 앞에 있는 문자를 남깁니다.</li>
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
<td>"people"</td>
<td>"peol"</td>
</tr>
<tr>
<td>"We are the world"</td>
<td>"We arthwold"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>"people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>"We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.</li>
</ul>

### 문제 풀이
(1) 문자열 자체에서도 Set 을 이요하여 문제 풀이를 하였다

(2) spread 를 이용하여 배열로 만든 후 중복된 값을 제거하여 다시 join 을 넣어 문자열로 바꿔주었다.

set 객체는 중복되지 않는 유일한 값들의 집합이다.

set 객체는 다음과 같은 특징을 가진다.
- 동일한 값을 중복하여 포함할수 없다
- 요소 순서에 의미가 없다
- 인덱스로 요소에 접근할 수 없다.
- 이러한 set 객체는 수학적 집합을 구현하기위한 자료구조이다.

그래서 set을 통해 교집합, 합집합, 차집합, 여집합 등을 구현할 수 있다.

```js
function solution(my_string) {
    return [...new Set(my_string)].join('');
}
```

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
