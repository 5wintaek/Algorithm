# 차례로 주어지다가 0 이 주어지면 
# 그때까지 주어진 정수를 차례로 출력하되 그 수가 홀수이면 3을 더한값, 짝수면 2로 나눈 몫을 
arr = list(map(int,input().split()))

for i in arr:
    if i == 0:
        break
    elif i % 2 == 1 :
        print(i+3,end=' ')
    else:
        print(i//2,end=' ')

        