# [level 0] 특정 문자 제거하기 - 120826 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120826) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>문자열 <code>my_string</code>과 문자 <code>letter</code>이 매개변수로 주어집니다. <code>my_string</code>에서 <code>letter</code>를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>my_string</code>의 길이 ≤ 100</li>
<li><code>letter</code>은 길이가 1인 영문자입니다.</li>
<li><code>my_string</code>과 <code>letter</code>은 알파벳 대소문자로 이루어져 있습니다.</li>
<li>대문자와 소문자를 구분합니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>my_string</th>
<th>letter</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"abcdef"</td>
<td>"f"</td>
<td>"abcde"</td>
</tr>
<tr>
<td>"BCBdbe"</td>
<td>"B"</td>
<td>"Cdbe"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>"abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>"BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.</li>
</ul>


### 문제 풀이
처음 문제풀이는 splice 매서드를 이용하여 배열을 지우려 했지만 letter 을 splice 로 지우지를 못하였다.

문자열을 배열 형태로 전환해 처리하여서 문제풀이를 진행하였다.

- (1) split 매서드를 이용하여 문자열 형태를 배열 형태로 전환하였다
- (2) 제거한 배열요소를 포함한 my_string을 다시 join 매서드를 사용하여 배열 요소를 모두 합친 후 하나의 문자열로 묶어주었다.

```js
function solution(my_string, letter) {
    let answer = my_string.split(letter).join('')
    return answer
}
```



> 출처 : 코어자바스크립트, https://ko.javascript.info/array-methods#ref-38

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
