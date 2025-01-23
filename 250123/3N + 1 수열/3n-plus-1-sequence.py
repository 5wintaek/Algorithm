# 2로 계속 나누는 것을 반복하다가 
# 최초로 홀수가 되는 순간


n = int(input())
cnt = 0

while True :
    if n == 1:
        break
    if n % 2 == 0 :
        n = n//2
        cnt += 1
    else :
        n = (n * 3) + 1
        cnt += 1
    
print(cnt)