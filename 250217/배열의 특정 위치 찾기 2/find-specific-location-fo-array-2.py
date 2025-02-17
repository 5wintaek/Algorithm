arr = list(map(int,input().split()))

sum1 = 0 # 홀수
sum2 = 0 # 짝수

for i in range(10):
    if(i+1)%2 == 0:
        sum2 += arr[i]
    if(i+1)%2 == 1:
        sum1 += arr[i]
if sum1 > sum2 :
    print(sum1-sum2)
elif sum1 < sum2 : 
    print(sum2 - sum1)
		