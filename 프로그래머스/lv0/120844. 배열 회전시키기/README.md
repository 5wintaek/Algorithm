# [level 0] 배열 회전시키기 - 120844 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120844) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>정수가 담긴 배열 <code>numbers</code>와 문자열&nbsp;<code>direction</code>가 매개변수로 주어집니다. 배열 <code>numbers</code>의 원소를 <code>direction</code>방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>3 ≤ <code>numbers</code>의 길이 ≤ 20</li>
<li><code>direction</code>은 "left" 와 "right" 둘 중 하나입니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>numbers</th>
<th>direction</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 2, 3]</td>
<td>"right"</td>
<td>[3, 1, 2]</td>
</tr>
<tr>
<td>[4, 455, 6, 4, -1, 45, 6]</td>
<td>"left"</td>
<td>[455, 6, 4, -1, 45, 6, 4]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>numbers</code> 가 [1, 2, 3]이고 <code>direction</code>이 "right" 이므로 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>numbers</code> 가 [4, 455, 6, 4, -1, 45, 6]이고 <code>direction</code>이 "left" 이므로 왼쪽으로 한 칸씩 회전시킨 [455, 6, 4, -1, 45, 6, 4]를 return합니다.</li>
</ul>

### 문제 풀이

- (1) right 과 left 일때 값을 뱉어내야 하기 때문에 if 문을 사용하였습니다
- (2) right 일 때 오른쪽으로 한 칸 밀어내고 맨 왼쪽으로 회전시켜야 하니 pop 을 이용하여 제거시킨다음 반환된 값을 unshift를 통해 다시 반환시킵니다
- (3) left 일 떄 왼쪽으로 회전시켜야 하니 shift 를 이용하여 맨 앞 배열 요소를 제거시키고 반환된 값을 push 를 통해 다시 반환시킵니다.
```js
function solution(numbers, direction) {
    if('right'=== direction){
        numbers.unshift(numbers.pop());
    } else{
        numbers.push(numbers.shift());
    }
    return numbers
}
```

### 다른 문제 풀이
- 삼항식으로 문제풀이를 보았는데 역시 if 문을 삼항식으로 줄여쓰니 조금 더 간결하게 코드가 짜여진다. 하지만 아직까지 머리로는 생각이 잘 나지 않는다
```js
function solution(numbers, direction) {
    direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
    return numbers;
}
```







> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
