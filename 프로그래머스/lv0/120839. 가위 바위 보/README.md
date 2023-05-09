# [level 0] 가위 바위 보 - 120839 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120839) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.12 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 <code>rsp</code>가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를  모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>0 &lt; <code>rsp</code>의 길이 ≤ 100</li>
<li> <code>rsp</code>와 길이가 같은 문자열을 return 합니다.</li>
<li> <code>rsp</code>는 숫자 0, 2, 5로 이루어져 있습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>rsp</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"2"</td>
<td>"0"</td>
</tr>
<tr>
<td>"205"</td>
<td>"052"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>"2"는 가위이므로 바위를 나타내는 "0"을 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>"205"는 순서대로 가위, 바위, 보이고 이를 모두 이기려면 바위, 보, 가위를 순서대로 내야하므로 “052”를 return합니다.</li>
</ul>

### 문제 풀이
- (1) rsp 는 숫자 0,2,5 로 구성되어있다
- (2) rsp.length 까지 for문으로 하나씩 돌려준다
- (3) const item 으로 rsp 를 i번쨰 인덱스 지정
- (4) 순서대로 item 이 2라면 answer 에 0을 집어넣어줌 
```js
function solution(rsp) {
    let answer = '';
    for(let i=0; i<rsp.length; i++){
        const item = rsp[i] 
        if(item === "2"){
            answer += "0";
        }
         if(item === "0"){
            answer += "5";
        }
         if(item === "5"){
            answer += "2";
        }
    }
    return answer
}
```

## 다른사람 문제풀이
```js
// 다른사람 문제풀이
/*
 가위는 2 바위는 0 보는 5
*/
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}
```
