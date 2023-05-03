# [level 0] 진료 순서 정하기 - 120835 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120835) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.14 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 <code>emergency</code>가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>중복된 원소는 없습니다.</li>
<li>1 ≤ <code>emergency</code>의 길이 ≤ 10</li>
<li>1 ≤ <code>emergency</code>의 원소 ≤ 100</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>emergency</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[3, 76, 24]</td>
<td>[3, 1, 2]</td>
</tr>
<tr>
<td>[1, 2, 3, 4, 5, 6, 7]</td>
<td>[7, 6, 5, 4, 3, 2, 1]</td>
</tr>
<tr>
<td>[30, 10, 23, 6, 100]</td>
<td>[2, 4, 3, 5, 1]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>emergency</code>가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>emergency</code>가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li><code>emergency</code>가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.</li>
</ul>

###문제풀이
- (1) spread syntax 를 사용하여 새로운 배열을 복사해줍니다.
- (2) sort 를 사용하여 오름차순으로 정렬해줍니다.
- (3) map 을 사용하여 순회를 시킵니다 
- (4) emergency = [3, 76, 24] 라고 가정한다면, a.indexOf(v) = [2,0,1]이 나옵니다. => 기존 emergency 에서 오름차순으로 indexOf를 비교했기 때문입니다.
![image](https://user-images.githubusercontent.com/109938280/235858101-d701a9b4-e5d3-4628-a097-cd6737ae27d9.png)

```js
function solution(emergency) {
    const a = [...emergency].sort((a,b)=>b-a)
    return emergency.map(v=>a.indexOf(v)+1)
}
```

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
