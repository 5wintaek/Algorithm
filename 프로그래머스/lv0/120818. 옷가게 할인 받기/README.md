# [level 0] 옷가게 할인 받기 - 120818 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120818) 

### 성능 요약

메모리: 33.7 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.<br>
구매한 옷의 가격&nbsp;<code>price</code>가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>10 ≤ <code>price</code> ≤ 1,000,000

<ul>
<li><code>price</code>는 10원 단위로(1의 자리가 0) 주어집니다.</li>
</ul></li>
<li>소수점 이하를 버린 정수를 return합니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>price</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>150,000</td>
<td>142,500</td>
</tr>
<tr>
<td>580,000</td>
<td>464,000</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>150,000원에서 5%를 할인한 142,500원을 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>580,000원에서 20%를 할인한 464,000원을 return 합니다.</li>
</ul>

### 오답노트
**처음 문제를 풀었던 방식이다.**
- (1) if문 첫번째 10만원 이상일떄 할인을 받는데 각각 30만원과 50만원도 할인율이 다르니 && 연산자를 붙여 범위를 정확하게 나눴어야 했다.
- (2) 10만원 이하 제품은 할인이 들어가지 않기 떄문에 10만원 이하 제품도 함께 추가해주어야 한다.

```js
function solution(price) {
  if(price >=100000){
     price *= 0.95
    else if(price >= 300000)
        price *= 0.9
    else if(price >= 500000)
        price *= 0.8
     }
    return Math.floor(price)
}  
```

### 문제풀이
```js
function solution(price) {
   if(price >= 100000 && price < 300000){  // 10만원 이상일떄
       return parseInt(price*0.95) // 정수로 반환하기 위해 parseInt 사용
   } else if(price >= 300000 && price < 500000){
       return parseInt(price*0.9)
   } else if(price >= 500000){
       return parseInt(price*0.8)
   } else{
       return price // 10만원 이하 제품일떄 
   }
}  
```


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
