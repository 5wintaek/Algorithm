n = int(input())

cnt = n

for i in range(1,n+1):
    for j in range(n+1,1,-1):
        print(j-1,end=' ')
    print()