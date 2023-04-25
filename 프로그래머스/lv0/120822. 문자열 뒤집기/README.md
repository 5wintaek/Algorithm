# [level 0] 문자열 뒤집기 - 120822 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120822) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>문자열 <code>my_string</code>이 매개변수로 주어집니다. <code>my_string</code>을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>my_string</code>의 길이 ≤ 1,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>my_string</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>"jaron"</td>
<td>"noraj"</td>
</tr>
<tr>
<td>"bread"</td>
<td>"daerb"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>my_string</code>이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>my_string</code>이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.</li>
</ul>

### 문제 풀이
자바스크립트는 문자열을 뒤집는 내장함수가 존재하지 않고, 배열을 뒤집는 함수만 존재한다.

- (1) 따라서 입력받은 문자열->배열로 바꾸기 위해 split 을 사용한 뒤, 
- (2) reverse함수를 사용하여 순서를 바꿔주고,
- (3) join을 사용하여 배열요소를 모두 합친 후 -> 문자열로 만들어준다.

```js
let my_string = "jaron";

let reversed_str = my_string.split("").reverse().join("");
console.log("원래 문자열: ", my_string);
console.log("뒤집은 문자열: ", reversed_str);
```

### 다른사람 문제 풀이(2)

전개 연산자를 사용하여 문자열을 다시 배열요소로 바꾸어 나열해줍니다.

```js
function solution(my_string) {
     var answer = [...my_string].reverse().join("");
     return answer;
 }
```


> 출처: 코어자바스크립트, https://ko.javascript.info/array-methods
> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
