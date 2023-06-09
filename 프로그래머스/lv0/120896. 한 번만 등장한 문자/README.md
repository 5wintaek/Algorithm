# [level 0] 한 번만 등장한 문자 - 120896 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120896) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.10 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

<p>문자열 <code>s</code>가 매개변수로 주어집니다. <code>s</code>에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>0 &lt; <code>s</code>의 길이 &lt; 1,000</li>
<li><code>s</code>는 소문자로만 이루어져 있습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"abcabcadc"</td>
<td>"d"</td>
</tr>
<tr>
<td>"abdc"</td>
<td>"abcd"</td>
</tr>
<tr>
<td>"hello"</td>
<td>"eho"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>"abcabcadc"에서 하나만 등장하는 문자는 "d"입니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>"abdc"에서 모든 문자가 한 번씩 등장하므로 사전 순으로 정렬한 "abcd"를 return 합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li>"hello"에서 한 번씩 등장한 문자는 "heo"이고 이를 사전 순으로 정렬한 "eho"를 return 합니다.</li>
</ul>


### 문제 풀이

(1) object를 이용하여 문제풀이를 진행하였습니다

(2) 첫번쨰 for문은 탐색을 위해 사용하였고, item 은 s에 나오는 단어들의 index 번쨰 단어들을 하나씩 꺼내줍니다.

(3) 만약 item 이 똑같은게 계속 나온다면 +1 씩 해주고 아니라면 1로만 정해줍니다.

(4) object 에 entries 를 이용하여 key,value 값으로 묶어줍니다.

(5) 두번째 for문에서는 만약 item[1] 이라면 한번만 나온 다넝이니 answer에 푸쉬를 해줍니다.

(6) 제한사항에서 문자를 사전 순으로 정렬하여야 하니 sort를 사용하였습니다.

(7) str.charCodeAt() 은 문자열을 반환하여서 ```a.charCodeAt(0)-b.charCodeAt(0));``` 라고 사용하였습니다. 

(8) join 은 배열을 다시 문자열로 반환해주기 위해서 사용하였습니다.


```js
const obj = {}

function solution(s) {
  let answer = []
  for(let i=0; i<s.length;i++){
      const item = s[i]; // s에 단어들을 하나씩 꺼내서 출력할 변수 하나 생성
      if(obj[item]){
          obj[item] += 1 
      } else{
          obj[item] = 1;
      }
  }
      const objArray = Object.entries(obj);
      for(let i=0; i<objArray.length; i++){
          const item = objArray[i]; // ['a',1];
          if(item[1]===1){
              answer.push(item[0])
          }
      }
      const sortedArray = answer.sort((a,b)=> a.charCodeAt(0)-b.charCodeAt(0));
      sortedArray.join('')
      return sortedArray.join('')      
}
```


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
