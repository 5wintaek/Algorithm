n = int(input())
cnt = 1

for i in range(1,n*2):
    for j in range(cnt):
        print('*',end=' ')
    print()

    if i < n :
        cnt += 1
    else:
        cnt -=1

