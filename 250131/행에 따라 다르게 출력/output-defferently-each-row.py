n = int(input()) # 3

cnt = 1

for i in range(1,n+1):
    if i % 2 == 0:
        for j in range(n):
            print(cnt+1,end=' ')
            cnt += 2
    else:
        for j in range(n):
            print(cnt,end=' ')
            cnt += 1
            
    print()
    