cnt = 0
n = int(input())
for i in range(1,n+1):
    if i%2!=0 and i%3!=0 and i%5!=0:
        cnt += 1
print(cnt)