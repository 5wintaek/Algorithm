n = int(input())
multi = 1
five=[]

while True:
    result = n * multi
    print(result,end=' ')
    multi += 1
    if result % 5 == 0:
        five.append(result)
    if len(five) == 2 :
        break

# 1. while 쓴 이유 -> 한개를 입력받아 배수들을 차례로 출력하고 5의 배수가 2번 출력되면 멈춰야 하니 
# 정해진 range 안에서 하는게 아닌 while 문을 사용해서 종료하는게 낫다고 생각하여 사용

# 2. multi 를 사용하여 n 을 곱해줄떄마다 1씩 증가 카운트를 하여 배수를 차례대로 입력하게 함

# 3. len 을 이용하여 five 라는 빈 배열이 2라고 나온다면 while문이 종료되게끔 함

    
