# [level 0] 외계행성의 나이 - 120834 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120834) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.06 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 <code>age</code>가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li><code>age</code>는 자연수입니다.</li>
<li><code>age</code> ≤ 1,000</li>
<li>PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>age</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>23</td>
<td>"cd"</td>
</tr>
<tr>
<td>51</td>
<td>"fb"</td>
</tr>
<tr>
<td>100</td>
<td>"baa"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>age</code>가 23이므로 "cd"를 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>age</code>가 51이므로 "fb"를 return합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li><code>age</code>가 100이므로 "baa"를 return합니다.</li>
</ul>

### 문제풀이
- (1)age를 문자열->배열로 바꿔준다
- (2)a~j 까지 배열을 만들어준다
- (3)for 문을 사용하여 // age length 까지 돌려준 뒤 // 


### 다른 문제풀이

- 52 -> "52" -> ["5","2"]. -> ["abcdefghij"[5], "abcdefghij"[2] ] -> "fc"
- 문자열 자체도 인덱스[] 접근 가능

```
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
```


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
