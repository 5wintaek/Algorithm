# [level 0] 문자열 정렬하기 (1) - 120850 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120850) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.08 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>문자열 <code>my_string</code>이 매개변수로 주어질 때, <code>my_string</code> 안에 있는 숫자만 골라 오름차순 정렬한 리스트를&nbsp;return 하도록 solution 함수를 작성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>my_string</code>의 길이 ≤ 100</li>
<li><code>my_string</code>에는 숫자가 한 개 이상 포함되어 있습니다.</li>
<li><code>my_string</code>은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다.
- - -</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>my_string</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"hi12392"</td>
<td>[1, 2, 2, 3, 9]</td>
</tr>
<tr>
<td>"p2o4i8gj2"</td>
<td>[2, 2, 4, 8]</td>
</tr>
<tr>
<td>"abcde0"</td>
<td>[0]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>"hi12392"에 있는 숫자 1, 2, 3, 9, 2를 오름차순 정렬한 [1, 2, 2, 3, 9]를 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>"p2o4i8gj2"에 있는 숫자 2, 4, 8, 2를 오름차순 정렬한 [2, 2, 4, 8]을 return 합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li>"abcde0"에 있는 숫자 0을 오름차순 정렬한 [0]을 return 합니다.</li>
</ul>

### 문제 풀이

map으로 돌렸을 떄, 문자열이 Nan으로 바뀌는 모습을 볼 수 있다.
<img width="166" alt="image" src="https://github.com/5wintaek/Algorithm/assets/109938280/89ac2775-03dd-44ec-92ba-4a27ad0219a5">


-(1) string 을 split 을 통해 배열로 바꿔준다
-(2) map으로 Number 로 바꿔주면 문자열 => Nan 으로 변환된다.
-(3) NaN 인 부분을 제외하고 난 후 sort로 올므차순 정렬해주면 된다.

```js
function solution(my_string) {
    return my_string.split("").filter((v) => !isNaN(v)).map((v) => v*1).sort((a,b) => a-b)
}
```

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
